
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule} from '@angular/material/table';



@NgModule({
  imports: [MatCardModule,MatGridListModule,MatButtonModule,MatSnackBarModule,MatTableModule],
  exports:[MatCardModule,MatGridListModule,MatButtonModule,MatSnackBarModule,MatTableModule]
  
})
export class Materialmodule { }