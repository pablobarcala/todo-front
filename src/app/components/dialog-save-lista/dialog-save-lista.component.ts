import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ListaService } from '../../services/lista.service';
import { SidenavService } from '../../services/sidenav.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../modules/material/material.module';

@Component({
  selector: 'app-dialog-save-lista',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule],
  templateUrl: './dialog-save-lista.component.html',
  styleUrl: './dialog-save-lista.component.css'
})
export class DialogSaveListaComponent {
  form: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private listaService: ListaService,
    private sidenavService: SidenavService,
    private dialogRef: MatDialogRef<DialogSaveListaComponent>
  ){
    this.form = formBuilder.group({
      id: [4],
      titulo: ['', Validators.required],
      icono: ['']
    })
  }

  guardar(event: Event) {
    event.preventDefault()

    if(this.form.valid){
      this.listaService.addLista(this.form.value)
      this.listaService.changeSelected(this.form.value)
      this.dialogRef.close()
      this.sidenavService.closeSidenav()
    } else {
      this.form.markAllAsTouched()
    }
  }
}
