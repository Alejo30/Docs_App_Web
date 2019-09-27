import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudEmpresasComponent } from './crud-empresas.component';
import { EmpresaFormComponent } from './components/empresa-form/empresa-form.component';


const routes: Routes = [
  { path: '', component: CrudEmpresasComponent },
  { path: 'add', component: EmpresaFormComponent },
  { path: 'edit/:pk', component: EmpresaFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudEmpresasRoutingModule { }
