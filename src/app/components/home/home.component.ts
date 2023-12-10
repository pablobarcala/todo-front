import { Component } from '@angular/core';
import { TareasCompletadasComponent } from '../tareas-completadas/tareas-completadas.component';
import { TareasComponent } from '../tareas/tareas.component';
import { SubheaderComponent } from '../subheader/subheader.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, SubheaderComponent, TareasComponent, TareasCompletadasComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
