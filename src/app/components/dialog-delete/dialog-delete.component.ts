import { Component, Inject } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-delete',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './dialog-delete.component.html',
  styleUrl: './dialog-delete.component.css'
})
export class DialogDeleteComponent {
  tipo: string = ''

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ){
    if(data.tipo == "tarea") {
      this.tipo = "tarea"
    } else {
      this.tipo = "lista"
    }
  }
}
