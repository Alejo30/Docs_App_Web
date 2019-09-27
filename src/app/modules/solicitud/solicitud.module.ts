import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { FormsModule } from '@angular/forms';
import { SolicitudRoutingModule } from './solicitud-routing.module';


@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    SolicitudRoutingModule,
    FormsModule
  ]
})
export class SolicitudModule { }
