import { Component, OnInit } from '@angular/core';
import { Tarea } from '../../interface/Tarea';
import { ActivatedRoute, Router } from '@angular/router';
import { TareaService } from '../../services/tarea.service';

@Component({
  selector: 'app-tarea-pagina',
  standalone: true,
  imports: [],
  templateUrl: './tarea-pagina.component.html',
  styleUrl: './tarea-pagina.component.css'
})
export class TareaPaginaComponent implements OnInit {
  tarea: Tarea | undefined = undefined
  id: number = 0

  constructor(
    private route: ActivatedRoute,
    private tareaService: TareaService,
    private router: Router
  ) {
    route.params.subscribe(params => {
      this.id = params['id']
      this.findTarea(this.id)
    })
  }

  ngOnInit(): void {
  }

  findTarea(id: number){
    this.tareaService.getTareas().subscribe(tareas => {
      let tareasFiltrar = tareas
      this.tarea = tareasFiltrar.find(t => t.id == id)
    })
  }

  volver(){
    this.router.navigate([''])
  }

  toggleCompletada(tarea: Tarea) {
    this.tareaService.toggleCompletada(tarea)
  }

  toggleFavorita(tarea: Tarea) {
    this.tareaService.toggleFavorita(tarea)
  }
}
