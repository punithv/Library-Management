import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { books } from 'src/modal/books';
import { catchError, map, tap } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { BooksComponent } from '../components/books/books.component';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HttpservicesService {

 

  constructor(private http:HttpClient) { }

  addbooks(Books:books){
    return this.http.post('https://angular-demo-b3944.firebaseio.com/books.json',Books)
  }
  getBooks(){
    return this.http.get<books[]>('https://angular-demo-b3944.firebaseio.com/books.json') 
  }
  updateBook(Books){
   
    return this.http.put('https://angular-demo-b3944.firebaseio.com/books.json',Books)
  }
  private handleError (error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    // and reformat for user consumption
    console.error(error); // log to console instead
    return Observable.throw(error);
  }
  private log(message: string) {
    console.log(message);
  }
}

