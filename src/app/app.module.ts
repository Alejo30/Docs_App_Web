import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { TurnosComponent} from './components/turnos/turnos.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistroClienteComponent } from './components/registro-cliente/registro-cliente.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    NosotrosComponent,
    TurnosComponent,
    TiendaComponent,
    RegistroClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
