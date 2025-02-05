import { Component } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { subscribe } from 'diagnostics_channel';
import { Book } from './book';

@Component({
  selector: 'app-service-exp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-exp.component.html',
  styleUrl: './service-exp.component.css'
})
export class ServiceExpComponent {
  date: any;
  books!: Book[];
  errorMessage!: string;
  constructor(private myservice: MyserviceService) { }
  ngOnInit() {
    this.date = this.myservice.showTodayDate();
  }
  getBooks(){
    this.myservice.getBooks().subscribe(
      books => this.books=books,
      error=>this.errorMessage=<any>error
    );
  }

  data!: Observable<number>;
  myArray: number[] = [];
  errors!: boolean;
  finished!: boolean;
  fetchData() {
    this.data = new Observable(observer => {
      setTimeout(() => { observer.next(11); }, 1000),
        setTimeout(() => { observer.next(12); }, 2000),
        setTimeout(() => { observer.complete(); }, 3000)
    });
    let sub = this.data.subscribe((value) => this.myArray.push(value),
      error => this.errors = true,
      () => this.finished = true);
  }


}
