import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  errorMessage: any;
  successMessage: any;
  userName: string="";
  password: string="";
  verify() {
    this.errorMessage = null;
    this.successMessage = null;
    if (this.userName == 'admin' && this.password == 'admin123') {
      this.successMessage = "User logged in successfully";
    }
    else {
      this.errorMessage = "User authentication failed";
    }
    console.log("User Name:", this.userName)
    console.log("Password:", this.password)
  }

}
