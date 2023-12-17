import { Component, Input } from '@angular/core';
import { Tarea } from '../../interface/Tarea';
import { TAREAS } from '../../interface/mock-tareas';
import { TareaService } from '../../services/tarea.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tarea-item',
  standalone: true,
  imports: [DatePipe],
  providers: [DatePipe],
  templateUrl: './tarea-item.component.html',
  styleUrl: './tarea-item.component.css'
})
export class TareaItemComponent {
  @Input() tarea: Tarea = TAREAS[0]
  hoyDate: Date = new Date()
  hoy: string | null = "" 

  constructor(
    private tareaService: TareaService,
    private router: Router,
    private snackbar: MatSnackBar,
    public datePipe: DatePipe
  ){
    console.log(this.tarea)
    this.hoy = datePipe.transform(this.hoyDate, 'yyyy-MM-dd')
  }

  toggleCompletada(tarea: Tarea){
    this.tareaService.toggleCompletada(tarea)
    switch(tarea.completada){
      case true:
        this.snackbar.open('Tarea completada', 'Cerrar', {
          duration: 1500
        });
        break;
      case false:
        this.snackbar.open('Tarea no completada', 'Cerrar', {
          duration: 1500
        });
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
        break;
      case false:
        this.snackbar.open('Tarea quitada de favoritos', 'Cerrar', {
          duration: 1500
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
