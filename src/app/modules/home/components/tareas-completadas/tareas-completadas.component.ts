import { Component, OnInit } from '@angular/core';
import { TareaService } from '../../../../services/tarea.service';
import { Tarea } from '../../../../interface/Tarea';
import { TareaItemComponent } from '../tarea-item/tarea-item.component';
import { Lista } from '../../../../interface/Lista';
import { LISTAS } from '../../../../interface/mock-listas';
import { ListaService } from '../../../../services/lista.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tareas-completadas',
  standalone: true,
  imports: [TareaItemComponent, DatePipe],
  providers: [DatePipe],
  templateUrl: './tareas-completadas.component.html',
  styleUrl: './tareas-completadas.component.css'
})
export class TareasCompletadasComponent implements OnInit {
  tareas: Tarea[] | null = null
  listaSelected: Lista = LISTAS[1]

  cerrar: boolean = false

  constructor(
    private tareaService: TareaService,
    private listaService: ListaService,
    private datePipe: DatePipe
  ){}

  ngOnInit(): void {
    this.listaService.getSelected().subscribe((lista: Lista) => {
      this.listaSelected = lista

      this.tareaService.getTareas().subscribe((tareas: Tarea[]) => {
        if(this.listaSelected === LISTAS[1]){
          let hoy: string | null = this.datePipe.transform(new Date(), "yyyy-MM-dd")

          if(hoy){
            console.log(hoy)
            this.tareas = tareas.filter(t => t.vencimiento == hoy)
          }
        } else if(this.listaSelected == LISTAS[2]){
          this.tareas = tareas.filter(t => t.favorita)
        } else {
          this.tareas = tareas.filter(t => t.listas.includes(this.listaSelected))
        }
      })
    })
  }

  toggleVistaCompletadas() {
    this.cerrar = !this.cerrar
  }
}
