import { Component, Input } from '@angular/core';
import { Tarea } from '../../interface/Tarea';
import { TAREAS } from '../../interface/mock-tareas';
import { TareaService } from '../../services/tarea.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../snackbar/snackbar.component';

@Component({
  selector: 'app-tarea-item',
  standalone: true,
  imports: [],
  templateUrl: './tarea-item.component.html',
  styleUrl: './tarea-item.component.css'
})
export class TareaItemComponent {
  @Input() tarea: Tarea = TAREAS[0]

  constructor(
    private tareaService: TareaService,
    private router: Router,
    private snackbar: MatSnackBar
  ){}

  toggleCompletada(tarea: Tarea){
    this.tareaService.toggleCompletada(tarea)
    switch(tarea.favorita){
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

  clickDiv(event: MouseEvent, id: number){
    if(event.target instanceof HTMLButtonElement || event.target instanceof SVGElement || event.target instanceof SVGPathElement){
      return
    } else {
      this.router.navigate([`pagina/${id}`])
    }
  }
}
