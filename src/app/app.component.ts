import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { DataBindingComponent } from "./components/data-binding/data-binding.component";
import { CommonModule } from '@angular/common';
import { LexEx1Component } from './lex/lex-ex1/lex-ex1.component';
import { LexEx2Component } from './lex/lex-ex2/lex-ex2.component';
import { LoginComponent } from "./lexExp/login/login.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, AddEmployeeComponent, EmployeeListComponent, DataBindingComponent, DataBindingComponent, CommonModule, LexEx1Component, LexEx2Component, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tutorials';
  status=false;
  changestatus(){
    this.status=!this.status;
  }
}
