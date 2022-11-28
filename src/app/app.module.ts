import { ExperimentoRoutingModule } from './experimentos/experimentos.routing.module';
import { PdfModule } from './module/pdf/pdf.module';
import { ExperimentosModule } from './experimentos/experimentos.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './module/navbar/navbar.component';
import { HomeComponent } from './module/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SobreOProjetoComponent } from './module/sobre-oprojeto/sobre-oprojeto.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SobreOProjetoComponent,
  ],
  imports: [
    BrowserModule,
    ExperimentosModule,
    PdfModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ExperimentoRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
