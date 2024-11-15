import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';

  constructor(private authService: AuthService) { }

  onSubmit() {
    this.authService.register({ name: this.name, email: this.email, password: this.password })
      .subscribe({
        next: (response) => {
          console.log('Usuario registrado:', response);
        },
        error: (error) => {
          console.error('Error en el registro:', error);
        },
        complete: () => {
          console.log('Registro completado');
        }
      });

  }
}
