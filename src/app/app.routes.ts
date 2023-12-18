import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TareaPaginaComponent } from './components/tarea-pagina/tarea-pagina.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: "full"},
    {path: "home", component: HomeComponent},
    {path: 'pagina/:id', component: TareaPaginaComponent},
    {path: 'configuracion', component: ConfiguracionComponent}
];
