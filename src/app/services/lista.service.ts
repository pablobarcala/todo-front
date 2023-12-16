import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Lista } from '../interface/Lista';
import { LISTAS, LISTAS_USUARIO } from '../interface/mock-listas';

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  listasUsuario: BehaviorSubject<Lista[]> = new BehaviorSubject<Lista[]>(LISTAS_USUARIO)
  listas: BehaviorSubject<Lista[]> = new BehaviorSubject<Lista[]>(LISTAS)
  listaSelected: BehaviorSubject<Lista> = new BehaviorSubject<Lista>(LISTAS[0])

  getListas() {
    return this.listasUsuario.asObservable()
  }

  getListasFijas() {
    return this.listas.asObservable()
  }

  addLista(lista: Lista) {
    let nuevasListas: Lista[] = this.listasUsuario.getValue()

    nuevasListas.push(lista)

    this.listasUsuario.next(nuevasListas)
  }

  deleteLista(lista: Lista){
    let nuevasListas: Lista[] = this.listasUsuario.getValue().filter(l => l != lista)

    this.listasUsuario.next(nuevasListas)
  }

  editLista(lista: Lista){
    let nuevasListas: Lista[] = this.listasUsuario.getValue()
    let index = nuevasListas.findIndex(l => l.id == lista.id)
    
    nuevasListas[index] = lista

    this.listasUsuario.next(nuevasListas)
  }

  getSelected(){
    return this.listaSelected.asObservable()
  }

  changeSelected(lista: Lista) {
    this.listaSelected.next(lista)
  }
}
