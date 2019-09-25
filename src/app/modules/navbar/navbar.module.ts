import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent as NavComponent } from './components/layout/layout.component';
import { AppRoutingModule } from '../../app-routing.module';
//import { LayoutComponent } from '../solicitud/components/layout/layout.component';



@NgModule({
  declarations: [NavComponent],
  exports:[
    NavComponent
  ],  
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class NavbarModule { }
