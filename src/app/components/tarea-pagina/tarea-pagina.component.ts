import { Component, OnInit } from '@angular/core';
import { Tarea } from '../../interface/Tarea';
import { ActivatedRoute, Router } from '@angular/router';
import { TareaService } from '../../services/tarea.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-tarea-pagina',
  standalone: true,
  imports: [],
  templateUrl: './tarea-pagina.component.html',
  styleUrl: './tarea-pagina.component.css'
})
export class TareaPaginaComponent implements OnInit {
  tarea: Tarea | undefined = undefined
  id: number = 0

  constructor(
    private route: ActivatedRoute,
    private tareaService: TareaService,
    private sidenavService: SidenavService,
    private router: Router,
    private snackbar: MatSnackBar,
    private dialog: MatDialog
  ) {}
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id']
      this.findTarea(this.id)
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

  toggleCompletada(tarea: Tarea){
    this.tareaService.toggleCompletada(tarea)
    switch(tarea.completada){
      case true:
        this.snackbar.open('Tarea completada', 'Cerrar', {
          duration: 1000
        });
        break;
      case false:
        this.snackbar.open('Tarea no completada', 'Cerrar', {
          duration: 1000
        });
        break;
    }
  }

  toggleFavorita(tarea: Tarea){
    this.tareaService.toggleFavorita(tarea)
    switch(tarea.favorita){
      case true:
        this.snackbar.open('Tarea agregada a favoritos', 'Cerrar', {
          duration: 1000
        });
        break;
      case false:
        this.snackbar.open('Tarea quitada de favoritos', 'Cerrar', {
          duration: 1000
        });
        break;
    }
  }

  deleteTarea(tarea: Tarea) {
    const dialog = this.dialog.open(DialogDeleteComponent)

    dialog.afterClosed().subscribe(resp => {
      if(resp) {
        this.tareaService.deleteTarea(tarea)
        this.volver()
      }
    })
  }
}
