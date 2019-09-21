import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent as LoginComponent } from './modules/login/components/layout/layout.component';
import { LayoutComponent as InicioComponent} from './modules/inicio/components/layout/layout.component';
import { LayoutComponent as DocumentosComponent} from './modules/documentos/components/layout/layout.component';
import { LayoutComponent as DashBoardComponent } from './modules/dashboard/components/layout/layout.component';
import { LayoutComponent as ConvocatoriaComponent } from './modules/convocatoria/components/layout/layout.component';
import { LayoutComponent as NavbarComponent} from './modules/navbar/components/layout/layout.component';
import { LayoutComponent as SolicitudComponent } from './modules/solicitud/components/layout/layout.component';


const routes: Routes = [
{ path: 'inicio', component: InicioComponent },
{ path: 'documentos', component: DocumentosComponent },
{ path: '', pathMatch: 'full', redirectTo: 'login' },
{ path: 'login', component: LoginComponent },
{ path: 'dashboard', component: DashBoardComponent },
{ path: 'convocatoria', component: ConvocatoriaComponent },
{ path: 'solicitud', component: SolicitudComponent },
{ path: 'navbar', component: NavbarComponent }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}