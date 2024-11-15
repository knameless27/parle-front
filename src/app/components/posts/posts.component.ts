import { Component, inject, OnInit, TemplateRef } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Api } from '../../services/api';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  standalone: true,
  imports: [CommonModule, NgSelectModule, NgbCollapse, FormsModule, ReactiveFormsModule, RouterLink],
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  private apiService = inject(Api);
  private modalService = inject(NgbModal);
  private fb = inject(FormBuilder);

  isNavbarCollapsed = true;
  posts: any[] = [];
  categories: any[] = [];
  selectedCategory: number = 1;
  errorMessage = '';
  createPostForm: FormGroup;
  closeResult = '';

  constructor() {
    this.createPostForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      category_id: [Validators.required],
    });
  }

  ngOnInit() {
    this.fetchCategories();
    this.fetchPosts();
  }

  fetchCategories() {
    this.apiService.getCategories().subscribe({
      next: (response: any) => {
        this.categories = response.categories || [];
        this.errorMessage = '';
      },
      error: (error) => {
        this.errorMessage = 'Error al cargar las categorías.';
        console.error(error);
      },
    });
  }

  fetchPosts(categoryId: number = 1) {
    this.apiService.getPostsByCategory(categoryId).subscribe({
      next: (response: any) => {
        this.posts = response.posts.data || [];
        this.errorMessage = '';
      },
      error: (error) => {
        this.errorMessage = 'Error al cargar los posts.';
        console.error(error);
      },
    });
  }

  onCategoryChange(categoryId: number) {
    this.selectedCategory = categoryId;
    this.fetchPosts(categoryId);
  }

  open(content: TemplateRef<any>) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  onCreatePost(modal: any) {
    if (this.createPostForm.valid) {
      const postData = this.createPostForm.value;
      this.apiService.createPost(postData).subscribe({
        next: () => {
          this.fetchPosts(this.selectedCategory);
          this.createPostForm.reset();
          modal.close('Post created');
        },
        error: (error) => {
          this.errorMessage = 'Error al crear el post.';
          console.error(error);
        },
      });
    }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
