import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  exports: [
    MatMenuModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
