import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './components/books/books.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddBooksComponent } from './components/add-books/add-books.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Materialmodule } from 'src/app/module/material.module';
import { MybooksComponent } from './components/mybooks/mybooks.component';
import { ModalpopupComponent } from './components/modalpopup/modalpopup.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';




@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    NavbarComponent,
    AddBooksComponent,
    MybooksComponent,
    ModalpopupComponent,
    AuthenticationComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    Materialmodule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA ]
})
export class AppModule { }
