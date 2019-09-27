import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent as DocumentosComponent } from './components/layout/layout.component';
import { DocumentosRoutingModule } from './documentos-routing.module';



@NgModule({
  declarations: [DocumentosComponent],
  imports: [
    CommonModule,
    DocumentosRoutingModule
  ]
})
export class DocumentosModule {

}
