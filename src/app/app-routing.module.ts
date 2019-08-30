import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { TurnosComponent } from './components/turnos/turnos.component';
import { RegistroClienteComponent } from './components/registro-cliente/registro-cliente.component';

const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'turnos', component: TurnosComponent },
    { path: 'tienda', component: TiendaComponent },
    { path: 'registro', component: RegistroClienteComponent},
    { path: '', pathMatch: 'full', redirectTo: 'inicio' }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}