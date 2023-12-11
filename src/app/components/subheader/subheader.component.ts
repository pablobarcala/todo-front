import { Component } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module';

@Component({
  selector: 'app-subheader',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './subheader.component.html',
  styleUrl: './subheader.component.css'
})
export class SubheaderComponent {
  ordenar: boolean = false
  metodoOrden: string = ""
  ordenTopDown: boolean = true

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
