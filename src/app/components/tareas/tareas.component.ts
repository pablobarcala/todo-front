import { Component, OnInit } from '@angular/core';
import { Tarea } from '../../interface/Tarea';
import { TareaItemComponent } from '../tarea-item/tarea-item.component';
import { TareaService } from '../../services/tarea.service';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [TareaItemComponent],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent implements OnInit {
  tareas: Tarea[] | null = null

  constructor(
    private tareaService: TareaService
  ){}

  ngOnInit(): void {
   this.tareaService.getTareas().subscribe((tareas: Tarea[]) => this.tareas = tareas)
  }
}
