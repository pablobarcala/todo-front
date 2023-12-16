import { Component, Inject, OnInit } from '@angular/core';
import { ListaService } from '../../services/lista.service';
import { Lista } from '../../interface/Lista';
import { LISTAS, LISTAS_USUARIO } from '../../interface/mock-listas';
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

  constructor(
    private listaService: ListaService,
    private tareaService: TareaService,
    @Inject(MAT_BOTTOM_SHEET_DATA) public tarea: Tarea,
    private snackbar: MatSnackBar
  ){}

  ngOnInit(): void {
    this.listaService.getListas().subscribe(listas => {
      this.listas = listas
    })
  }
  
  toggleLista(lista: Lista){
    if(this.tarea.listas.includes(lista)){
      let nuevasListas: Lista[] = this.tarea.listas.filter(l => l.id != lista.id || l.fija)
      
      this.tarea.listas = nuevasListas
    } else {
      this.tarea.listas.push(lista)
    }
    this.tareaService.toggleListaTarea(this.tarea)
  }
}
