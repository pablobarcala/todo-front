import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../modules/material/material.module';
import { ListaService } from '../../services/lista.service';
import { Lista } from '../../interface/Lista';
import { LISTAS } from '../../interface/mock-listas';
import { SidenavListasComponent } from '../sidenav-listas/sidenav-listas.component';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [MaterialModule, SidenavListasComponent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent implements OnInit {
  listas: Lista[] = LISTAS

  constructor(
    private listaService: ListaService
  ){}

  ngOnInit(): void {
    this.listaService.getListas().subscribe((listas: Lista[]) => this.listas = listas)
  }
}
