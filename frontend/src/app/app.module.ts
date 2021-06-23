import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppHeaderModule } from './app-header/app-header.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginCadastro } from './views/login-cadastro/login-cadastro.component';
import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { ListaPostoComponent } from './views/lista-posto/lista-posto.component';
import { NoticiasComponent } from './views/noticias/noticias.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginCadastro,
    ListaPostoComponent,
    NoticiasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    AppHeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
