import { AppModule } from './../app.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LenteDivergenteComponent } from './lente-divergente/lente-divergente.component';



@NgModule({
  declarations: [
    LenteDivergenteComponent
  ],
  imports: [
    CommonModule,
    AppModule
  ],
  exports: [
    LenteDivergenteComponent
  ]
})
export class ExperimentosModule { }
