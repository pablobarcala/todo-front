import { Component, Input } from '@angular/core';
import { Lista } from '../../interface/Lista';
import { LISTAS } from '../../interface/mock-listas';
import { MaterialModule } from '../../modules/material/material.module';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';
import { ListaService } from '../../services/lista.service';
import { Router } from '@angular/router';
import { SidenavService } from '../../services/sidenav.service';
import { DialogEditListaComponent } from '../dialog-edit-lista/dialog-edit-lista.component';

@Component({
  selector: 'app-sidenav-header',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './sidenav-header.component.html',
  styleUrl: './sidenav-header.component.css'
})
export class SidenavHeaderComponent {
  @Input() listaSelected: Lista = LISTAS[0]

  constructor(
    private dialog: MatDialog,
    private listaService: ListaService,
    private router: Router,
    private sidenavService: SidenavService
  ){}

  editarLista(lista: Lista){
    const dialog = this.dialog.open(DialogEditListaComponent, {
      data: lista
    })

    dialog.afterClosed().subscribe(resp => {
      if(resp){
        this.listaService.editLista(resp)
        this.listaService.changeSelected(resp)
        this.sidenavService.closeSidenav()
      } else {
        this.sidenavService.closeSidenav()
      }
    })
  }

  eliminarLista(lista: Lista){
    const dialog = this.dialog.open(DialogDeleteComponent, {
      data: {tipo: "lista"}
    })

    dialog.afterClosed().subscribe(resp => {
      if(resp){
        this.listaService.deleteLista(lista)
        this.listaService.changeSelected(LISTAS[1])
        this.sidenavService.closeSidenav()
      }
    })
  }
}
