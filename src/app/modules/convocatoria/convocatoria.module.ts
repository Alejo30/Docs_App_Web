import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ConvocatoriaRoutingModule } from './convocatoria-routing.module';
import { LayoutComponent } from './components/layout/layout.component';



@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    ConvocatoriaRoutingModule,
    FormsModule,
  ]
})
export class ConvocatoriaModule { }
