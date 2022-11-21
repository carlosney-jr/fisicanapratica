import { PdfModule } from './../module/pdf/pdf.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LenteDivergenteComponent } from './lente-divergente/lente-divergente.component';



@NgModule({
  declarations: [
    LenteDivergenteComponent
  ],
  imports: [
    CommonModule,
    PdfModule
  ],
  exports: [
    LenteDivergenteComponent
  ]
})
export class ExperimentosModule { }
