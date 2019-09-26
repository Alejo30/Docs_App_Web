import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { AppRoutingModule } from '../../app-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ]
})
export class SolicitudModule { }
