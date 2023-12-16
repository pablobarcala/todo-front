import { Component, OnInit } from '@angular/core';
import { Tarea } from '../../interface/Tarea';
import { TareaItemComponent } from '../tarea-item/tarea-item.component';
import { TareaService } from '../../services/tarea.service';
import { ListaService } from '../../services/lista.service';
import { Lista } from '../../interface/Lista';
import { LISTAS } from '../../interface/mock-listas';
import { SortService } from '../../services/sort.service';
import { TAREAS } from '../../interface/mock-tareas';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [TareaItemComponent],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent implements OnInit {
  tareas: Tarea[] = TAREAS
  listaSelected: Lista = LISTAS[1]
  sortSelected: string = ""
  topDown: boolean = true

  constructor(
    private tareaService: TareaService,
    private listaService: ListaService,
    private sortService: SortService
  ){}

  ngOnInit(): void {
    this.listaService.getSelected().subscribe((lista: Lista) => {
      this.listaSelected = lista

      this.tareaService.getTareas().subscribe((tareas: Tarea[]) => {
        this.tareas = tareas.filter(t => t.listas.includes(this.listaSelected))
      })

      this.sortService.getSelected().subscribe((sortSelected: string) => {
        this.sortSelected = sortSelected
        this.sortTareas()
      })
      this.sortService.getTopDown().subscribe((topDown: boolean) => {
        this.topDown = topDown
        this.sortTareas()
      })
    })
  }

  sortTareas() {
    switch(this.sortSelected) {
      case "":
        break;
      case "Favoritos":
        this.tareas.sort((a, b) => {
          if(this.topDown) {
            return a.favorita === b.favorita ? 0 : a.favorita ? -1 : 1
          } else {
            return a.favorita === b.favorita ? 0 : a.favorita ? 1 : -1
          }
        })
        break;
      case "Alfabéticamente":
        this.tareas.sort((a, b) => {
          if(this.topDown){
            return a.titulo == b.titulo ? 0 : a.titulo > b.titulo ? -1 : 1 
          } else {
            return a.titulo == b.titulo ? 0 : a.titulo > b.titulo ? 1 : -1
          }
        })
        break;
    }
  }
}