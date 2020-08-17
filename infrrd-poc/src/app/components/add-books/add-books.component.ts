import { Component, OnInit } from '@angular/core';
import {books} from 'src/modal/books';
import { HttpservicesService } from 'src/app/services/httpservices.service';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.css']
})
export class AddBooksComponent implements OnInit {

  newBooks:books={
    book_id:'',
    book_name:'',
    image_Url:'',
    issued:false,
    renewDateTime:'',
    issuedDateTime:'',
    Available:false
  };

  constructor(private http:HttpservicesService) { }

  ngOnInit() {
  }
  addBooks(){
    this.http.addbooks(this.newBooks).subscribe((data)=> {
      console.log(data);

    });
  }
  }



