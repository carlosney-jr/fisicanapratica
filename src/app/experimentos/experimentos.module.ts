import { ExperimentoRoutingModule } from './experimentos.routing.module';
import { PdfModule } from './../module/pdf/pdf.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LenteDivergenteComponent } from './lente-divergente/lente-divergente.component';
import { LeiDeHookeComponent } from './lei-de-hooke/lei-de-hooke.component';
import { TorqueComponent } from './torque/torque.component';
import { LenteConvergenteComponent } from './lente-convergente/lente-convergente.component';
import { TransformadoresComponent } from './transformadores/transformadores.component';
import { ExperimentosHomeComponent } from './experimentos-home/experimentos-home.component';



@NgModule({
  declarations: [
    LenteDivergenteComponent,
    LeiDeHookeComponent,
    TorqueComponent,
    LenteConvergenteComponent,
    TransformadoresComponent,
    ExperimentosHomeComponent
  ],
  imports: [
    CommonModule,
    PdfModule,
    ExperimentoRoutingModule
  ],
  exports: [
    LenteDivergenteComponent
  ]
})
export class ExperimentosModule { }
