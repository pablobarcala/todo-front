import { Component } from '@angular/core';
import { TareasCompletadasComponent } from '../tareas-completadas/tareas-completadas.component';
import { TareasComponent } from '../tareas/tareas.component';
import { SubheaderComponent } from '../subheader/subheader.component';
import { HeaderComponent } from '../header/header.component';
import { AddTareaComponent } from '../add-tarea/add-tarea.component';
import { MaterialModule } from '../../modules/material/material.module';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { SidenavService } from '../../services/sidenav.service';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, SubheaderComponent, TareasComponent, TareasCompletadasComponent, AddTareaComponent, MaterialModule, SidenavComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isSidenavOpen: boolean = false

  constructor(
    private sidenavService: SidenavService
  ){
    sidenavService.getSidenavOpen().subscribe(sidenav => this.isSidenavOpen = sidenav)
  }

}
