import { Component, Input } from '@angular/core';
import { Lista } from '../../interface/Lista';
import { LISTAS } from '../../interface/mock-listas';
import { ListaService } from '../../services/lista.service';
import { SidenavService } from '../../services/sidenav.service';

@Component({
  selector: 'app-sidenav-listas',
  standalone: true,
  imports: [],
  templateUrl: './sidenav-listas.component.html',
  styleUrl: './sidenav-listas.component.css'
})
export class SidenavListasComponent {
  @Input() lista: Lista = LISTAS[0]

  constructor(
    private listaService: ListaService,
    private sidenavService: SidenavService
  ){}

  changeLista(lista: Lista) {
    this.listaService.changeSelected(lista)
    this.sidenavService.toggleSidenav()
  }
}
