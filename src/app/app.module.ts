
import { PdfModule } from './module/pdf/pdf.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './module/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { ExperimentosModule } from './module/experimentos/experimentos.module';
import { ExperimentoRoutingModule } from './module/experimentos/experimentos.routing.module';
import { NavbarComponent } from './module/home/navbar/navbar.component';
import { SobreOProjetoComponent } from './module/home/sobre-oprojeto/sobre-oprojeto.component';

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
