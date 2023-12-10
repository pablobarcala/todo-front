import { Component, OnInit } from '@angular/core';
import { TareaService } from '../../services/tarea.service';
import { Tarea } from '../../interface/Tarea';
import { TareaItemComponent } from '../tarea-item/tarea-item.component';
import { Observable, filter } from 'rxjs';

@Component({
  selector: 'app-tareas-completadas',
  standalone: true,
  imports: [TareaItemComponent],
  templateUrl: './tareas-completadas.component.html',
  styleUrl: './tareas-completadas.component.css'
})
export class TareasCompletadasComponent implements OnInit {
  tareas: Tarea[] | null = null

  cerrar: boolean = false

  constructor(
    private tareaService: TareaService
  ){}

  ngOnInit(): void {
    this.tareaService.getTareas().subscribe(tareas => this.tareas = tareas)
  }

  toggleVistaCompletadas() {
    this.cerrar = !this.cerrar
  }
}
