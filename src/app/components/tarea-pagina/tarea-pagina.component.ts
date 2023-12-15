import { Component, OnInit } from '@angular/core';
import { Tarea } from '../../interface/Tarea';
import { ActivatedRoute, Router } from '@angular/router';
import { TareaService } from '../../services/tarea.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';
import { SidenavService } from '../../services/sidenav.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheetListasComponent } from '../bottom-sheet-listas/bottom-sheet-listas.component';
import { MaterialModule } from '../../modules/material/material.module';

@Component({
  selector: 'app-tarea-pagina',
  standalone: true,
  imports: [ReactiveFormsModule, MaterialModule],
  templateUrl: './tarea-pagina.component.html',
  styleUrl: './tarea-pagina.component.css'
})
export class TareaPaginaComponent implements OnInit {
  tarea: Tarea | undefined = undefined
  id: number = 0
  form: FormGroup

  constructor(
    private route: ActivatedRoute,
    private tareaService: TareaService,
    private sidenavService: SidenavService,
    private router: Router,
    private snackbar: MatSnackBar,
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private matBottomSheet: MatBottomSheet
  ) {
    this.form = formBuilder.group({
      id: [],
      titulo: ['', Validators.required],
      completada: [],
      favorita: [],
      nota: [''],
      listas: []
    })
  }
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id']
      this.findTarea(this.id)

      this.form.patchValue({
        id: this.id,
        titulo: this.tarea?.titulo,
        completada: this.tarea?.completada,
        favorita: this.tarea?.favorita,
        nota: this.tarea?.nota,
        listas: this.tarea?.listas
      })
    })
  }
  
  findTarea(id: number){
    this.tareaService.getTareas().subscribe(tareas => {
      let tareasFiltrar = tareas
      this.tarea = tareasFiltrar.find(t => t.id == id)
    })
  }

  volver(){
    this.router.navigate([''])
    this.sidenavService.closeSidenav()
  }
  
  editTarea(){
    this.tareaService.editTarea(this.form.value)
  }

  editarTexto(){
    this.editTarea()
  }

  toggleCompletada(tarea: Tarea){
    this.tareaService.toggleCompletada(tarea)
    switch(tarea.completada){
      case true:
        this.snackbar.open('Tarea completada', 'Cerrar', {
          duration: 1500
        });
        this.form.get('completada')?.setValue(true)
        break;
      case false:
        this.snackbar.open('Tarea no completada', 'Cerrar', {
          duration: 1500
        });
        this.form.get('completada')?.setValue(false)
        break;
    }
  }

  toggleFavorita(tarea: Tarea){
    this.tareaService.toggleFavorita(tarea)
    switch(tarea.favorita){
      case true:
        this.snackbar.open('Tarea agregada a favoritos', 'Cerrar', {
          duration: 1500
        });
        this.form.get('favorita')?.setValue(true)
        break;
      case false:
        this.snackbar.open('Tarea quitada de favoritos', 'Cerrar', {
          duration: 1500
        });
        this.form.get('favorita')?.setValue(false)
        break;
    }
  }

  verListas(tarea: Tarea) {
    const bottomSheet = this.matBottomSheet.open(BottomSheetListasComponent, {
      data: tarea
    })

    bottomSheet.afterDismissed().subscribe(resp => {
      if(resp) {
        this.snackbar.open('Se agregó a una nueva lista', 'Cerrar', {
          duration: 1500
        })
      }
    })
  }

  deleteTarea(tarea: Tarea) {
    const dialog = this.dialog.open(DialogDeleteComponent, {
      data: {tipo: "tarea"}
    })

    dialog.afterClosed().subscribe(resp => {
      if(resp) {
        this.tareaService.deleteTarea(tarea)
        this.volver()
      }
    })
  }

}
