import { Component, OnInit } from '@angular/core';
import { books} from 'src/modal/books';
import { HttpservicesService} from 'src/app/services/httpservices.service';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-mybooks',
  templateUrl: './mybooks.component.html',
  styleUrls: ['./mybooks.component.css']
})
export class MybooksComponent implements OnInit {
  Allbooks=null;
  dataSource = new MatTableDataSource<books>(this.Allbooks);
  displayedColumns = ['book_id', 'book_name', 'image_Url','return', 'renew', 'issuedDateTime', 'renewDateTime'];
  errorMessage:string;
  book:books[];

  constructor(private http:HttpservicesService,public router:Router) { }

  ngOnInit() {
    this.http.getBooks().subscribe((data)=>{
      this.Allbooks=data;
      this.dataSource.data = this.Allbooks;
    });
  }

  return(book) {
    const now = new Date();
    book.issuedDateTime = '';
    book.issued = false;
    book.renewDateTime = '';
    this.http.updateBook(this.Allbooks)
      .subscribe(() => this.returned(book));
  }
    
  

  returned(book): void {
    this.router.navigate(['/books']);
  }
  renew(books, renewDateTime) {
    const now = new Date();
    books.issued = true;
    console.log('renewDateTime', renewDateTime);
    books.renewDateTime = this.nextRenewalDate(new Date(renewDateTime), 15);
    this.http.updateBook(this.Allbooks)
      .subscribe(
      (error: any) => this.errorMessage = <any>error
      );
  }

  nextRenewalDate(theDate, days) {
    return new Date(theDate.getTime() + days * 24 * 60 * 60 * 1000);
  }

}
