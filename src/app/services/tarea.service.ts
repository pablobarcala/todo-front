import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tarea } from '../interface/Tarea';
import { TAREAS } from '../interface/mock-tareas';
import { Lista } from '../interface/Lista';
import { LISTAS } from '../interface/mock-listas';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  tareas: BehaviorSubject<Tarea[]> = new BehaviorSubject<Tarea[]>(TAREAS)

  constructor() { }

  getTareas(){
    return this.tareas.asObservable()
  }

  addTarea(nuevaTarea: Tarea){
    let listaTareas: Tarea[] = this.tareas.getValue()

    listaTareas.push(nuevaTarea)

    this.tareas.next(listaTareas)
  }

  deleteTarea(tarea: Tarea){
    let listaTareas: Tarea[] = this.tareas.getValue().filter(t => t != tarea)

    this.tareas.next(listaTareas)
  }

  editTarea(tarea: Tarea){
    let listaTareas: Tarea[] = this.tareas.getValue()
    let index = listaTareas.findIndex(t => t.id == tarea.id)
    
    listaTareas[index] = tarea

    this.tareas.next(listaTareas)
  }

  toggleCompletada(tarea: Tarea) {
    const tareasActualizadas = this.tareas.getValue().map(t => {
      if(t.id === tarea.id){
        return {...t, completada: !t.completada}
      } else {
        return t
      }
    })

    tarea.completada = !tarea.completada

    this.tareas.next([...tareasActualizadas])
  }

  toggleFavorita(tarea: Tarea) {
    const tareasActualizadas = this.tareas.getValue().map(t => {
      if(t.id === tarea.id){
        let listasTarea: Lista[] = t.listas
        if(!listasTarea.includes(LISTAS[2])){
          listasTarea.push(LISTAS[2])
        } else {
          listasTarea = listasTarea.filter(l => l.id != LISTAS[2].id)
        }
        return {...t, favorita: !t.favorita, listas: [...listasTarea]}
      } else {
        return t
      }
    })

    tarea.favorita = !tarea.favorita

    this.tareas.next([...tareasActualizadas])
  }

  getTareasDeLista(lista: Lista) {
    const listaTareas: Tarea[] = this.tareas.getValue().filter(t => t.listas.includes(lista))

    return listaTareas
  }

  toggleListaTarea(tarea: Tarea) {
    const listaTareas: Tarea[] = this.tareas.getValue().filter(t => t.id != tarea.id)

    listaTareas.push(tarea)

    this.tareas.next(listaTareas)
  }

  editListaDeTarea(listaAnterior: Lista, nuevaLista: Lista){
    const listaTareas: Tarea[] = this.getTareasDeLista(listaAnterior)

    for(const tarea of listaTareas){
      tarea.listas = tarea.listas.map(l => l == listaAnterior ? nuevaLista : l)
    }
  }

  deleteListaDeTarea(listaAnterior: Lista){
    const listaTareas: Tarea[] = this.getTareasDeLista(listaAnterior)

    for(const tarea of listaTareas){
      tarea.listas = tarea.listas.filter(l => l != listaAnterior)
    }
  }
}