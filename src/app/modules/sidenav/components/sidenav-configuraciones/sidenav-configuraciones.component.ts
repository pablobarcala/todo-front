import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidenavService } from '../../../../services/sidenav.service';

@Component({
  selector: 'app-sidenav-configuraciones',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidenav-configuraciones.component.html',
  styleUrl: './sidenav-configuraciones.component.css'
})
export class SidenavConfiguracionesComponent {

  constructor(
    private sidenavService: SidenavService
  ){}

  navegarConfiguraciones() {
    this.sidenavService.toggleSidenav()
  }
}
