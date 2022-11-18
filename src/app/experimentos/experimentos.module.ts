import { AppComponent } from './../app.component';
import { ExibirPDFComponent } from './../module/pdf/exibir-pdf/exibir-pdf.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LenteDivergenteComponent } from './lente-divergente/lente-divergente.component';



@NgModule({
  declarations: [
    LenteDivergenteComponent
  ],
  imports: [
    CommonModule,
    AppComponent
  ],
  exports: [
    LenteDivergenteComponent
  ]
})
export class ExperimentosModule { }
