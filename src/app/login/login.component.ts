import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  //styleUrls: [],
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router) {}

  onLogin() {
    if (this.email === 'test@example.com' && this.password === 'password') {
      this.errorMessage = '';
      alert('Login successful!');
    } else {
      this.errorMessage = 'Invalid email or password.';
    }
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
