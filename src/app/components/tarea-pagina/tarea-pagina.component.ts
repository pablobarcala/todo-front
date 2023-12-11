import { Component, OnInit } from '@angular/core';
import { Tarea } from '../../interface/Tarea';
import { ActivatedRoute, Router } from '@angular/router';
import { TareaService } from '../../services/tarea.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private router: Router,
    private snackbar: MatSnackBar
  ) {
    route.params.subscribe(params => {
      this.id = params['id']
      this.findTarea(this.id)
    })
  }

  ngOnInit(): void {
  }

  findTarea(id: number){
    this.tareaService.getTareas().subscribe(tareas => {
      let tareasFiltrar = tareas
      this.tarea = tareasFiltrar.find(t => t.id == id)
    })
  }

  volver(){
    this.router.navigate([''])
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
        this.snackbar.open('Tarea marcada como favorita', 'Cerrar', {
          duration: 1000
        });
        break;
      case false:
        this.snackbar.open('Tarea desmarcada como favorita', 'Cerrar', {
          duration: 1000
        });
        break;
    }
  }
}
