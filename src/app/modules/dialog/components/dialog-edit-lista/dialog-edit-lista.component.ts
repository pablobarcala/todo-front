import { Component, Inject, OnInit } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Lista } from '../../../../interface/Lista';
import { LISTAS } from '../../../../interface/mock-listas';
import { TareaService } from '../../../../services/tarea.service';

@Component({
  selector: 'app-dialog-edit-lista',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule],
  templateUrl: './dialog-edit-lista.component.html',
  styleUrl: './dialog-edit-lista.component.css'
})
export class DialogEditListaComponent implements OnInit {
  form: FormGroup
  listaAnterior: Lista = LISTAS[0]

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DialogEditListaComponent>,
    private tareaService: TareaService,
    @Inject(MAT_DIALOG_DATA) public lista: Lista
  ){
    this.form = formBuilder.group({
      id: [],
      titulo: ['', Validators.required],
      fija: [false]
    })
  }
  
  ngOnInit(): void {
    this.listaAnterior = this.lista
    this.form.patchValue({
      id: this.lista.id,
      titulo: this.lista.titulo
    })  
  }

  editar(){
    this.tareaService.editListaDeTarea(this.listaAnterior, this.form.value)

    if(this.form.valid){
      this.dialogRef.close(this.form.value)
    } else {
      this.form.markAllAsTouched
    }
  }
}
