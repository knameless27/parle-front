import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Api } from '../../services/api';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink]
})
export class LoginComponent {
  private apiService = inject(Api);
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loginForm.value.password = btoa(this.loginForm.value.password)
      this.apiService.login(this.loginForm.value).subscribe({
        next: (response: any) => {
          localStorage.setItem('auth_token', response.access_token);
          // this.loginForm.reset();
        },
        // error: (error) => {
        //   this.errorMessage = 'Error al registrar usuario. Intenta nuevamente.';
        //   this.successMessage = '';
        // },
      })
    } else {
      console.error('El formulario es inválido');
    }
  }
}
