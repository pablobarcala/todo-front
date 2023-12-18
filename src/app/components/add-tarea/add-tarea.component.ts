import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TareaService } from '../../services/tarea.service';
import { ListaService } from '../../services/lista.service';
import { Lista } from '../../interface/Lista';
import { LISTAS } from '../../interface/mock-listas';

@Component({
  selector: 'app-add-tarea',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule],
  templateUrl: './add-tarea.component.html',
  styleUrl: './add-tarea.component.css'
})
export class AddTareaComponent implements OnInit {
  form: FormGroup
  listaSelected: Lista = LISTAS[0]

  constructor(
    private formBuilder: FormBuilder,
    private tareaService: TareaService,
    private listaService: ListaService
  ){
    this.form = formBuilder.group({
      // DESPUES DE AGREGAR BACK Y BD CAMBIAR EL ID Y DEJARLO VACIO PARA QUE SE AUTOCOMPLETE
      id: [15],
      titulo: [''],
      completada: [false],
      favorita: [false],
      nota: [''],
      creacion: [new Date()],
      listas: []
    })
  }

  ngOnInit(): void {
    this.listaService.getSelected().subscribe(lista => this.listaSelected = lista)
  }

  addTarea() {
    const tareaListas: Lista[] = []

    if(this.listaSelected.titulo != "Mis tareas"){
      tareaListas.push(this.listaSelected, LISTAS[0])
    } else {
      tareaListas.push(this.listaSelected)
    }

    this.form.patchValue({
      listas: tareaListas
    })

    if(this.listaSelected.titulo == "Favoritos"){
      this.form.patchValue({
        favorita: true
      })
    }

    this.tareaService.addTarea(this.form.value)
    this.form.get('titulo')?.setValue('')
  }
}