import { Component, OnInit } from '@angular/core';
import { ListaService } from '../../services/lista.service';
import { Lista } from '../../interface/Lista';
import { LISTAS } from '../../interface/mock-listas';
import { SidenavListasComponent } from '../sidenav-listas/sidenav-listas.component';
import { SidenavConfiguracionesComponent } from '../sidenav-configuraciones/sidenav-configuraciones.component';
import { SidenavHeaderComponent } from '../sidenav-header/sidenav-header.component';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [SidenavListasComponent, SidenavConfiguracionesComponent, SidenavHeaderComponent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent implements OnInit {
  listas: Lista[] = LISTAS
  listaSelected: Lista = LISTAS[0]

  constructor(
    private listaService: ListaService
  ){}

  ngOnInit(): void {
    this.listaService.getSelected().subscribe(lista => this.listaSelected = lista)
    this.listaService.getListas().subscribe((listas: Lista[]) => this.listas = listas)
  }
}
