import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent as LoginComponent } from './modules/login/components/layout/layout.component';
import { LayoutComponent as InicioComponent} from './modules/inicio/components/layout/layout.component';
import { LayoutComponent as DocumentosComponent} from './modules/documentos/components/layout/layout.component';
import { LayoutComponent as DashBoardComponent } from './modules/dashboard/components/layout/layout.component';


const routes: Routes = [
{ path: 'inicio', component: InicioComponent },
{ path: 'documentos', component: DocumentosComponent },
{ path: '', pathMatch: 'full', redirectTo: 'login' },
{ path: 'login', component: LoginComponent },
{ path: 'dashboard', component: DashBoardComponent }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}