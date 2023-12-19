import { Component } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { SidenavService } from '../../../../services/sidenav.service';
import { SidenavComponent } from '../../../sidenav/components/sidenav/sidenav.component';
import { ConfigHeaderComponent } from '../config-header/config-header.component';
import { ConfigUsuarioComponent } from '../config-usuario/config-usuario.component';
import { ListaService } from '../../../../services/lista.service';

@Component({
  selector: 'app-configuracion',
  standalone: true,
  imports: [MaterialModule, SidenavComponent, ConfigHeaderComponent, ConfigUsuarioComponent],
  templateUrl: './configuracion.component.html',
  styleUrl: './configuracion.component.css'
})
export class ConfiguracionComponent {
  isSidenavOpen: boolean = false

  constructor(
    private sidenavService: SidenavService,
    private listaService: ListaService
  ){
    sidenavService.getSidenavOpen().subscribe(sidenavOpen => this.isSidenavOpen = sidenavOpen)
    listaService.changeSelected({id: 0, titulo: "", fija: true})
  }
}
