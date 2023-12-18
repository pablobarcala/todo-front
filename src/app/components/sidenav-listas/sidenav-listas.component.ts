import { Component, Input, OnInit } from '@angular/core';
import { Lista } from '../../interface/Lista';
import { LISTAS } from '../../interface/mock-listas';
import { ListaService } from '../../services/lista.service';
import { SidenavService } from '../../services/sidenav.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav-listas',
  standalone: true,
  imports: [],
  templateUrl: './sidenav-listas.component.html',
  styleUrl: './sidenav-listas.component.css'
})
export class SidenavListasComponent implements OnInit {
  @Input() lista: Lista = LISTAS[0]
  listaSelected: Lista = LISTAS[0]

  constructor(
    private listaService: ListaService,
    private sidenavService: SidenavService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.listaService.getSelected().subscribe(lista => this.listaSelected = lista)
  }

  changeLista(lista: Lista) {
    this.listaService.changeSelected(lista)
    this.sidenavService.toggleSidenav()
    this.router.navigate([''])
  }
}
