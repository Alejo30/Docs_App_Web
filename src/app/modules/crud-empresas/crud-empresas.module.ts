import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudEmpresasRoutingModule } from './crud-empresas-routing.module';
import { CrudEmpresasComponent } from './crud-empresas.component';
import { EmpresaFormComponent } from './components/empresa-form/empresa-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CrudEmpresasComponent, EmpresaFormComponent],
  imports: [
    CommonModule,
    CrudEmpresasRoutingModule,
    FormsModule
  ]
})
export class CrudEmpresasModule { }
