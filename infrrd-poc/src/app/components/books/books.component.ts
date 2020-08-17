import { Component, OnInit } from '@angular/core';
import { books } from 'src/modal/books';
import {HttpservicesService} from 'src/app/services/httpservices.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material';
import { Router} from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  booklist=null;
  dataSource = new MatTableDataSource<books>(this.booklist);
  displayedColumns = ['book_id', 'book_name', 'image_Url','issued','Available'];
  errorMessage:string;

  Book:books[];

  constructor(private http:HttpservicesService,public snackBar:MatSnackBar, public router:Router) { }

  ngOnInit() {
   
    this.http.getBooks().subscribe((data)=>{
      console.log("data"+data)
      this.booklist=Object.keys(data).map(key => data[key]);
      this.dataSource.data = this.booklist;
      console.log("booklist"+this.booklist)
      // this.books=Object.keys(data).map(key => data[key]);
      // this.books=data;
    })
    
  }

  issue(book){
    const now = new Date();
    book.issuedDateTime = now;
    book.issued = true;
    book.renewDateTime = this.nextRenewalDate(now, 15);
    this.http.updateBook(this.booklist)
      .subscribe(() => this.issued(book),
      (error: any) => this.errorMessage = <any>error
      );

     


  }

  
  issued(book): void {
    this.snackBar.open('Issued succesfully', 'Return', {
      duration: 2000,
    });
  }
  nextRenewalDate(theDate, days) {
    return new Date(theDate.getTime() + days * 24 * 60 * 60 * 1000);
  }

}
