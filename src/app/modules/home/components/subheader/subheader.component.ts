import { Component } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { Lista } from '../../../../interface/Lista';
import { LISTAS } from '../../../../interface/mock-listas';
import { ListaService } from '../../../../services/lista.service';
import { SortService } from '../../../../services/sort.service';

@Component({
  selector: 'app-subheader',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './subheader.component.html',
  styleUrl: './subheader.component.css'
})
export class SubheaderComponent {
  listaSelected: Lista = LISTAS[1]
  sortSelected: string = ""
  ordenTopDown: boolean = true

  constructor(
    private listaService: ListaService,
    private sortService: SortService
  ){
    listaService.getSelected().subscribe(selected => this.listaSelected = selected)
    sortService.getSelected().subscribe(selected => this.sortSelected = selected)
    sortService.getTopDown().subscribe(topDown => this.ordenTopDown = topDown)
  }

  cerrarOrden() {
    this.sortService.changeSelected("")
  }

  changeSort(sort: string){
    this.sortService.changeSelected(sort)
  }

  cambiarOrden() {
    this.sortService.changeTopDown()
  }
}
