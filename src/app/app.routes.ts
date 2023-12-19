import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/components/home/home.component';
import { TareaPaginaComponent } from './modules/tarea-pagina/components/tarea-pagina/tarea-pagina.component';
import { ConfiguracionComponent } from './modules/configuracion/components/configuracion/configuracion.component';
import { RegistroComponent } from './modules/register/components/registro/registro.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: "full"},
    {path: "home", component: HomeComponent},
    {path: 'pagina/:id', component: TareaPaginaComponent},
    {path: 'configuracion', component: ConfiguracionComponent},
    {path: 'registro', component: RegistroComponent}
];
