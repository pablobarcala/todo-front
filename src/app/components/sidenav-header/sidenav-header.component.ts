import { Component, Input } from '@angular/core';
import { Lista } from '../../interface/Lista';
import { LISTAS } from '../../interface/mock-listas';
import { MaterialModule } from '../../modules/material/material.module';

@Component({
  selector: 'app-sidenav-header',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './sidenav-header.component.html',
  styleUrl: './sidenav-header.component.css'
})
export class SidenavHeaderComponent {
  @Input() listaSelected: Lista = LISTAS[0]
}
