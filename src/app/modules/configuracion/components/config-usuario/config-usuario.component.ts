import { Component } from '@angular/core';
import { Usuario } from '../../../../interface/Usuario';
import { MaterialModule } from '../../../material/material.module';

@Component({
  selector: 'app-config-usuario',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './config-usuario.component.html',
  styleUrl: './config-usuario.component.css'
})
export class ConfigUsuarioComponent {
  usuario: Usuario = {
    nombre: "Pablo",
    apellido: "Barcala",
    correo: "correo@correo.com",
    password: ""
  }
}
