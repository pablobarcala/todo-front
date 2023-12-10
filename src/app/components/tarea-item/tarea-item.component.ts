import { Component, Input } from '@angular/core';
import { Tarea } from '../../interface/Tarea';
import { TAREAS } from '../../interface/mock-tareas';
import { TareaService } from '../../services/tarea.service';
import { Router } from '@angular/router';

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
    private router: Router
  ){}

  toggleCompletada(tarea: Tarea){
    this.tareaService.toggleCompletada(tarea)
  }

  toggleFavorita(tarea: Tarea){
    this.tareaService.toggleFavorita(tarea)
  }

  clickDiv(event: MouseEvent, id: number){
    if(event.target instanceof HTMLButtonElement || event.target instanceof SVGElement || event.target instanceof SVGPathElement){
      return
    } else {
      this.router.navigate([`pagina/${id}`])
    }
  }
}
