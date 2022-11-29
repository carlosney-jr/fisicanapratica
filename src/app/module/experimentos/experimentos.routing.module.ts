import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExperimentosHomeComponent } from './experimentos-home/experimentos-home.component';
import { LeiDeHookeComponent } from './lei-de-hooke/lei-de-hooke.component';
import { LenteConvergenteComponent } from './lente-convergente/lente-convergente.component';
import { LenteDivergenteComponent } from './lente-divergente/lente-divergente.component';
import { TorqueComponent } from './torque/torque.component';
import { TransformadoresComponent } from './transformadores/transformadores.component';

const appRoutes: Routes = [
  {
    path: 'experimento',
    component: ExperimentosHomeComponent,
    children: [
      {
        path: 'transformador',
        component: TransformadoresComponent,
      },
      { path: 'torque', component: TorqueComponent },
      {
        path: 'lente_divergente',
        component: LenteDivergenteComponent,
      },
      {
        path: 'lente_convergente',
        component: LenteConvergenteComponent,
      },
      { path: 'hooke', component: LeiDeHookeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule],
})
export class ExperimentoRoutingModule {}
