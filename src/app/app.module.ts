import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApolloModule, Apollo } from "apollo-angular";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InMemoryCache } from "apollo-cache-inmemory";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './modules/login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { DocumentosModule } from './modules/documentos/documentos.module';
import { InicioModule } from './modules/inicio/inicio.module';
import { NavbarModule } from './modules/navbar/navbar.module';
import { ConvocatoriaModule } from './modules/convocatoria/convocatoria.module';
import { SolicitudModule } from './modules/solicitud/solicitud.module';
import { AlumnoModule } from './modules/alumno/alumno.module';
import { CoordinacionModule } from './modules/coordinacion/coordinacion.module';
import { DocenteModule } from './modules/docente/docente.module';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApolloModule,
    HttpLinkModule,
    FormsModule,
    ReactiveFormsModule,
    LoginModule,
    DashboardModule,
    DocumentosModule,
    InicioModule,
    HttpClientModule,
    NavbarModule,
    ConvocatoriaModule,
    SolicitudModule
  ],
  providers: [
  
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule {

  constructor(
    private apollo: Apollo,
    private httpLink: HttpLink
  ) {

    apollo.create(
      {
        link: httpLink.create(
          {
            uri: 'http://35.192.7.211:8000/graphql'
            //uri: 'localhost:8000/graphql'
          }
        ),
        cache: new InMemoryCache()
      }
    ); 

  }

 }