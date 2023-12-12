import { Component } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module';
import { Lista } from '../../interface/Lista';
import { LISTAS } from '../../interface/mock-listas';
import { ListaService } from '../../services/lista.service';

@Component({
  selector: 'app-subheader',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './subheader.component.html',
  styleUrl: './subheader.component.css'
})
export class SubheaderComponent {
  listaSelected: Lista = LISTAS[1]
  ordenar: boolean = false
  metodoOrden: string = ""
  ordenTopDown: boolean = true

  constructor(
    private listaService: ListaService
  ){
    listaService.getSelected().subscribe(selected => this.listaSelected = selected)
  }

  cerrarOrden() {
    this.ordenar = false
  }

  pasarOrden(metodo: string){
    this.ordenar = true

    this.metodoOrden = metodo
  }

  cambiarOrden() {
    this.ordenTopDown = !this.ordenTopDown
  }
}
