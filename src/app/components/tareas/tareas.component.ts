import { Component, OnInit } from '@angular/core';
import { Tarea } from '../../interface/Tarea';
import { TareaItemComponent } from '../tarea-item/tarea-item.component';
import { TareaService } from '../../services/tarea.service';
import { ListaService } from '../../services/lista.service';
import { Lista } from '../../interface/Lista';
import { LISTAS } from '../../interface/mock-listas';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [TareaItemComponent],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent implements OnInit {
  tareas: Tarea[] | null = null
  listaSelected: Lista = LISTAS[1]

  constructor(
    private tareaService: TareaService,
    private listaService: ListaService
  ){}

  ngOnInit(): void {
    this.listaService.getSelected().subscribe((lista: Lista) => {
      this.listaSelected = lista
      this.tareaService.getTareas().subscribe((tareas: Tarea[]) => {
        this.tareas = tareas.filter(t => t.listas.includes(this.listaSelected))
      })
    })
  }
}
