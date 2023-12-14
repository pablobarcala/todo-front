import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSidenavModule,
    MatBottomSheetModule
  ],
  exports: [
    MatMenuModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule,
    MatSidenavModule,
    MatBottomSheetModule
  ]
})
export class MaterialModule { }
