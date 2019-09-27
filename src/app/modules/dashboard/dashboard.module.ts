import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { DashboardRoutingModule } from './dashboard-routing.module';


@NgModule({
  declarations: [LayoutComponent],

  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
