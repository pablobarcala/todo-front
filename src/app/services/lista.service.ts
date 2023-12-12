import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Lista } from '../interface/Lista';
import { LISTAS } from '../interface/mock-listas';

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  listas: BehaviorSubject<Lista[]> = new BehaviorSubject<Lista[]>(LISTAS)
  listaSelected: BehaviorSubject<Lista> = new BehaviorSubject<Lista>(LISTAS[1])

  getListas() {
    return this.listas.asObservable()
  }

  getSelected(){
    return this.listaSelected.asObservable()
  }

  changeSelected(lista: Lista) {
    this.listaSelected.next(lista)
  }
}
