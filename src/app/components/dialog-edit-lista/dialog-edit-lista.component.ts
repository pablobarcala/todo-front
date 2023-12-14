import { Component, Inject, OnInit } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Lista } from '../../interface/Lista';

@Component({
  selector: 'app-dialog-edit-lista',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule],
  templateUrl: './dialog-edit-lista.component.html',
  styleUrl: './dialog-edit-lista.component.css'
})
export class DialogEditListaComponent implements OnInit {
  form: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<DialogEditListaComponent>,
    @Inject(MAT_DIALOG_DATA) public lista: Lista
  ){
    this.form = formBuilder.group({
      id: [],
      titulo: ['', Validators.required],
      icono: ['']
    })
  }
  
  ngOnInit(): void {
    this.form.patchValue({
      id: this.lista.id,
      titulo: this.lista.titulo,
      icono: this.lista.icono
    })  
  }

  editar(){
    if(this.form.valid){
      this.dialogRef.close(this.form.value)
    } else {
      this.form.markAllAsTouched
    }
  }
}
