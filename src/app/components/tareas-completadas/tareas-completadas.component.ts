import { Component, OnInit } from '@angular/core';
import { TareaService } from '../../services/tarea.service';
import { Tarea } from '../../interface/Tarea';
import { TareaItemComponent } from '../tarea-item/tarea-item.component';
import { Observable, filter } from 'rxjs';
import { Lista } from '../../interface/Lista';
import { LISTAS } from '../../interface/mock-listas';
import { ListaService } from '../../services/lista.service';

@Component({
  selector: 'app-tareas-completadas',
  standalone: true,
  imports: [TareaItemComponent],
  templateUrl: './tareas-completadas.component.html',
  styleUrl: './tareas-completadas.component.css'
})
export class TareasCompletadasComponent implements OnInit {
  tareas: Tarea[] | null = null
  listaSelected: Lista = LISTAS[1]

  cerrar: boolean = false

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

  toggleVistaCompletadas() {
    this.cerrar = !this.cerrar
  }
}
