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
        if(this.listaSelected.titulo == "Favoritos"){
          this.tareas = tareas.filter(t => t.favorita)
        } else {
          this.tareas = tareas.filter(t => t.listas.includes(this.listaSelected))
        }
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
          const tituloA = a.titulo.toLowerCase()
          const tituloB = b.titulo.toLowerCase()

          if(this.topDown){
            return tituloA == tituloB ? 0 : tituloA > tituloB ? 1 : -1 
          } else {
            return tituloA == tituloB ? 0 : tituloA > tituloB ? -1 : 1
          }
        })
        break;
      case "Fecha de vencimiento":
        this.tareas.sort((a, b) => {
          if(this.topDown){
            return a.vencimiento == b.vencimiento ? 0 : a.vencimiento > b.vencimiento ? -1 : 1
          } else {
            return a.vencimiento == b.vencimiento ? 0 : a.vencimiento > b.vencimiento ? 1 : -1
          }
        })
        break;
      case "Fecha de creación":
        this.tareas.sort((a, b) => {
          if(this.topDown){
            return a.creacion == b.creacion ? 0 : a.creacion > b.creacion ? -1 : 1
          } else {
            return a.creacion == b.creacion ? 0 : a.creacion > b.creacion ? 1 : -1
          }
        })
        break;
    }
  }
}