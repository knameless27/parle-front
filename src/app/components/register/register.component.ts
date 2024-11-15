import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Api } from '../../services/api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
})
export class RegisterComponent {
  private apiService = inject(Api);
  registerForm: FormGroup;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      password_confirmation: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.registerForm.valid) {
      this.registerForm.value.password = btoa(this.registerForm.value.password)
      this.registerForm.value.password_confirmation = btoa(this.registerForm.value.password_confirmation)
      this.apiService.register(this.registerForm.value).subscribe({
        next: (response: any) => {
          this.successMessage = 'Usuario registrado exitosamente.';
          localStorage.setItem('auth_token', response.access_token);
          this.errorMessage = '';
          this.registerForm.reset();
        },
        error: (error) => {
          this.errorMessage = 'Error al registrar usuario. Intenta nuevamente.';
          this.successMessage = '';
        },
      });
    } else {
      this.errorMessage = 'Por favor, llena todos los campos correctamente.';
      this.successMessage = '';
    }
  }
}
