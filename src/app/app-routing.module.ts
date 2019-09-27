import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent as LoginComponent } from './modules/login/components/layout/layout.component';

import { NavbarComponent } from './components/navbar/navbar.component';


const routes: Routes = [
    { path: 'login', component: LoginComponent },

    {
        path: '', component: NavbarComponent,
        children: [
            {
                path: 'dashboard',
                loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: 'empresas',
                loadChildren: () => import('./modules/crud-empresas/crud-empresas.module').then(m => m.CrudEmpresasModule)
            },
            {
                path: 'documentos',
                loadChildren: () => import('./modules/documentos/documentos.module').then(m => m.DocumentosModule)
            },
            {
                path: 'convocatoria',
                loadChildren: () => import('./modules/convocatoria/convocatoria.module').then(m => m.ConvocatoriaModule)
            },
            {
                path: 'solicitud',
                loadChildren: () => import('./modules/solicitud/solicitud.module').then(m => m.SolicitudModule)
            },

        ]
    },

    { path: '', pathMatch: 'full', redirectTo: 'login' },



    /*     { path: 'documentos', component: DocumentosComponent },
        
        { path: 'dashboard', component: DashBoardComponent },
        { path: 'convocatoria', component: ConvocatoriaComponent },
        { path: 'solicitud', component: SolicitudComponent },
        { path: 'navbar', component: NavbarComponent }, */
    /*     {
            path: 'empresas',
            loadChildren: () => import('./modules/empresas/empresas.module').then(m => m.EmpresasModule)
        } */
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }