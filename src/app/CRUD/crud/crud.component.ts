import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { catchError,of } from 'rxjs';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [HttpClientModule,FormsModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent {
  result:any;
  vr=2;
  error: string | null = null;
  constructor(private http:HttpClient) { }
  // create(){
  //   this.http.get('https://jsonplaceholder.typicode.com/todos/'+this.vr).subscribe(data=>{
  //     //this.result = data;
  //     this.result = JSON.stringify(data);
  //  //this.result= this.result['title'];
  //   });
  create() {
    this.http.get('https://jsonplaceholder.typicode.com/todos/' + this.vr).pipe(
      catchError(error => {
        this.error = 'An error occurred while fetching data';
        return of(null); // Return a default value in case of error
      })
    ).subscribe(data => {
      if (data) {
        this.result = JSON.stringify(data);
      }
    });

    //this.result = JSON.stringify(this.result);
  }
  
}
