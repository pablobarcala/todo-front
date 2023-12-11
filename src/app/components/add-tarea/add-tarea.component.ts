import { Component } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module';

@Component({
  selector: 'app-add-tarea',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './add-tarea.component.html',
  styleUrl: './add-tarea.component.css'
})
export class AddTareaComponent {

}
