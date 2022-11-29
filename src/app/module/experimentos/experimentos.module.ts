import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LenteDivergenteComponent } from './lente-divergente/lente-divergente.component';
import { LeiDeHookeComponent } from './lei-de-hooke/lei-de-hooke.component';
import { TorqueComponent } from './torque/torque.component';
import { LenteConvergenteComponent } from './lente-convergente/lente-convergente.component';
import { TransformadoresComponent } from './transformadores/transformadores.component';
import { ExperimentosHomeComponent } from './experimentos-home/experimentos-home.component';
import { PdfModule } from '../pdf/pdf.module';
import { ExperimentoRoutingModule } from './experimentos.routing.module';



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
