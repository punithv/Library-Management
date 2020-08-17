import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBooksComponent } from './components/add-books/add-books.component';
import { MybooksComponent } from './components/mybooks/mybooks.component';
import { BooksComponent } from './components/books/books.component';


const routes: Routes = [{
  path:'addbook',component:AddBooksComponent},
  {path:'mybooks',component:MybooksComponent},
  {path:'books',component:BooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
