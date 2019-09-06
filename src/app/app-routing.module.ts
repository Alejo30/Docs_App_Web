import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent as LoginComponent } from './modules/login/components/layout/layout.component';
import { InicioComponent } from './modules/inicio/inicio.component';
import { DocumentosComponent } from './modules/documentos/documentos.component';

const routes: Routes = [
{ path: 'inicio', component: InicioComponent },
{ path: 'documentos', component: DocumentosComponent },
{ path: '', pathMatch: 'full', redirectTo: 'login' },
{ path: 'login', component: LoginComponent }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}