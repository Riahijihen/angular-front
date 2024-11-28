import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  //styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  nom = '';
  prenom = '';
  tel = '';
  adresse = '';
  dateNaissance = '';
  email = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router) {}

  // Method to handle form submission
  onRegister() {
    if (this.isValidForm()) {
      alert('Registration successful!');
      // Add your registration logic here
      this.router.navigate(['/login']); // Redirect to login after successful registration
    } else {
      this.errorMessage = 'Please fill in all fields correctly.';
    }
  }

  // Simple form validation method
  isValidForm(): boolean {
    return (
      this.nom.trim() !== '' &&
      this.prenom.trim() !== '' &&
      this.tel.trim() !== '' &&
      this.adresse.trim() !== '' &&
      this.dateNaissance.trim() !== '' &&
      this.email.trim() !== '' &&
      this.password.trim() !== ''
    );
  }
  
}
