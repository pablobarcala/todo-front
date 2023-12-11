import { Component } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-delete',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './dialog-delete.component.html',
  styleUrl: './dialog-delete.component.css'
})
export class DialogDeleteComponent {

  constructor(
    private dialogRef: MatDialogRef<DialogDeleteComponent>
  ){}
}
