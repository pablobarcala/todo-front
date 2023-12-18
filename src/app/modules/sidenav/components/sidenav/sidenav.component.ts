import { Component, OnInit } from '@angular/core';
import { ListaService } from '../../../../services/lista.service';
import { Lista } from '../../../../interface/Lista';
import { LISTAS } from '../../../../interface/mock-listas';
import { SidenavListasComponent } from '../sidenav-listas/sidenav-listas.component';
import { SidenavConfiguracionesComponent } from '../sidenav-configuraciones/sidenav-configuraciones.component';
import { SidenavHeaderComponent } from '../sidenav-header/sidenav-header.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogSaveListaComponent } from '../../../dialog/components/dialog-save-lista/dialog-save-lista.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SidenavService } from '../../../../services/sidenav.service';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [SidenavListasComponent, SidenavConfiguracionesComponent, SidenavHeaderComponent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent implements OnInit {
  listasUsuario: Lista[] = LISTAS
  listasFijas: Lista[] = LISTAS
  listaSelected: Lista = LISTAS[0]

  constructor(
    private listaService: ListaService,
    private dialog: MatDialog,
    private snackbar: MatSnackBar,
    private sidenavService: SidenavService
  ){}

  ngOnInit(): void {
    this.listaService.getListasFijas().subscribe(listas => this.listasFijas = listas)
    this.listaService.getSelected().subscribe(lista => this.listaSelected = lista)
    this.listaService.getListas().subscribe((listas: Lista[]) => this.listasUsuario = listas)
  }

  addLista() {
    const dialog = this.dialog.open(DialogSaveListaComponent)

    dialog.afterClosed().subscribe(resp => {
      if(resp){
        this.snackbar.open('Lista creada correctamente', 'Cerrar', {
          duration: 1500
        })
      } else {
        this.sidenavService.closeSidenav()
      }
    })
  }
}
