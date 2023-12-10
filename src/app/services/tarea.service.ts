import { Injectable } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';
import { Tarea } from '../interface/Tarea';
import { TAREAS } from '../interface/mock-tareas';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  tareas: BehaviorSubject<Tarea[]> = new BehaviorSubject<Tarea[]>(TAREAS)

  constructor() { }

  getTareas(){
    return this.tareas.asObservable()
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
        return {...t, favorita: !t.favorita}
      } else {
        return t
      }
    })

    tarea.favorita = !tarea.favorita

    this.tareas.next([...tareasActualizadas])
  }
}
