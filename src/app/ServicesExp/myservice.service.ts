import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './service-exp/book';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  private bookUrls='tutorials/src/assets/books.json';
  constructor(private http:HttpClient) { }

  getBooks():Observable<Book[]>{
    return this.http.get<Book[]>(this.bookUrls);

  }
  showTodayDate(){
    let ndate = new Date();
    return ndate;
  }
}
