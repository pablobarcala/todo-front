import { Component, Inject, OnInit } from '@angular/core';
import { ListaService } from '../../services/lista.service';
import { Lista } from '../../interface/Lista';
import { LISTAS } from '../../interface/mock-listas';
import { MaterialModule } from '../../modules/material/material.module';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Tarea } from '../../interface/Tarea';
import { TareaService } from '../../services/tarea.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-bottom-sheet-listas',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './bottom-sheet-listas.component.html',
  styleUrl: './bottom-sheet-listas.component.css'
})
export class BottomSheetListasComponent implements OnInit {
  listas: Lista[] = LISTAS
  listasTarea: Lista[] = LISTAS

  constructor(
    private listaService: ListaService,
    private tareaService: TareaService,
    @Inject(MAT_BOTTOM_SHEET_DATA) public tarea: Tarea,
    private snackbar: MatSnackBar
  ){}

  ngOnInit(): void {
    this.listaService.getListas().subscribe(listas => {
      this.listas = listas
      this.listasTarea = listas.filter(l => this.tarea.listas.includes(l))
    })
  }

  toggleLista(lista: Lista){
    if(this.listasTarea.includes(lista)){
        if(this.listasTarea.length == 1) {
          this.snackbar.open('Debe pertenecer al menos a una lista', 'Cerrar', {
            duration: 1000
          })
        } else {
          const nuevasListas: Lista[] = this.tarea.listas.filter(l => l.id != lista.id)
          
          this.listasTarea = nuevasListas
          this.tarea.listas = this.listasTarea
        }
    } else {
      this.listasTarea.push(lista)
      this.tarea.listas = this.listasTarea
    }
    this.tareaService.toggleListaTarea(this.tarea)
  }
}
