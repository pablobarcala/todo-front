import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
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
    private sidenavService: SidenavService,
    private router: Router
  ){}

  navegarConfiguraciones() {
    this.sidenavService.toggleSidenav()
    this.router.navigate(['/configuracion'])
  }
}
