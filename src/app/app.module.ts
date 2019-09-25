import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApolloModule, Apollo } from "apollo-angular";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { FormsModule } from "@angular/forms";
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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApolloModule,
    HttpLinkModule,
    FormsModule,
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
            //uri: 'http://35.192.7.211:8000/graphql'
            uri: 'localhost:8000/graphql'
          }
        ),
        cache: new InMemoryCache()
      }
    ); 

  }

 }