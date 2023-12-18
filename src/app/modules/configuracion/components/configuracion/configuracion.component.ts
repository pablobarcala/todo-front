import { Component } from '@angular/core';
import { MaterialModule } from '../../../material/material.module';
import { SidenavService } from '../../../../services/sidenav.service';
import { SidenavComponent } from '../../../sidenav/components/sidenav/sidenav.component';
import { ConfigHeaderComponent } from '../config-header/config-header.component';

@Component({
  selector: 'app-configuracion',
  standalone: true,
  imports: [MaterialModule, SidenavComponent, ConfigHeaderComponent],
  templateUrl: './configuracion.component.html',
  styleUrl: './configuracion.component.css'
})
export class ConfiguracionComponent {
  isSidenavOpen: boolean = false

  constructor(
    private sidenavService: SidenavService
  ){
    sidenavService.getSidenavOpen().subscribe(sidenavOpen => this.isSidenavOpen = sidenavOpen)
  }
}
