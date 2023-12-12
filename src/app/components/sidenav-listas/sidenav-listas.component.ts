import { Component, Input } from '@angular/core';
import { Lista } from '../../interface/Lista';
import { LISTAS } from '../../interface/mock-listas';

@Component({
  selector: 'app-sidenav-listas',
  standalone: true,
  imports: [],
  templateUrl: './sidenav-listas.component.html',
  styleUrl: './sidenav-listas.component.css'
})
export class SidenavListasComponent {
  @Input() lista: Lista = LISTAS[0]
}
