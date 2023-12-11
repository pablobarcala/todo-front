import { Component } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TareaService } from '../../services/tarea.service';

@Component({
  selector: 'app-add-tarea',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule],
  templateUrl: './add-tarea.component.html',
  styleUrl: './add-tarea.component.css'
})
export class AddTareaComponent {
  form: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private tareaService: TareaService
  ){
    this.form = formBuilder.group({
      titulo: [''],
      id: [15]
    })
  }

  addTarea() {
    this.tareaService.addTarea(this.form.value)
    this.form.get('titulo')?.setValue('')
  }
}
