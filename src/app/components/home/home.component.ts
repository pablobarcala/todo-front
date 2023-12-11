import { Component } from '@angular/core';
import { TareasCompletadasComponent } from '../tareas-completadas/tareas-completadas.component';
import { TareasComponent } from '../tareas/tareas.component';
import { SubheaderComponent } from '../subheader/subheader.component';
import { HeaderComponent } from '../header/header.component';
import { AddTareaComponent } from '../add-tarea/add-tarea.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, SubheaderComponent, TareasComponent, TareasCompletadasComponent, AddTareaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
