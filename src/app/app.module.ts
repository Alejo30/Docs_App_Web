import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApolloModule, Apollo } from "apollo-angular";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { FormsModule } from "@angular/forms";
import { InMemoryCache } from "apollo-cache-inmemory";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './modules/login/login.module';
import { HeaderComponent } from './modules/header/header.component';

import { HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './modules/inicio/inicio.component';
import { DocumentosComponent } from './modules/documentos/documentos.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    DocumentosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApolloModule,
    HttpLinkModule,
    FormsModule,
    LoginModule,
    DashboardModule,
    HttpClientModule
  ],
  providers: [],
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
          }
        ),
        cache: new InMemoryCache()
      }
    ); 

  }

 }