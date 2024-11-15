import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Api } from '../../services/api';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class PostsComponent implements OnInit {
  private apiService = inject(Api);
  posts: any[] = [];
  errorMessage = '';

  ngOnInit() {
    this.fetchPosts(1);
  }

  fetchPosts(categoryId: number) {
    this.apiService.getPostsByCategory(categoryId).subscribe({
      next: (response: any) => {
        this.posts = response.posts || [];
        this.errorMessage = '';
      },
      error: (error) => {
        this.errorMessage = 'Error al cargar los posts. Intenta nuevamente.';
        console.error(error);
      },
    });
  }
}
