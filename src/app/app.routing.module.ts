
import { HomeComponent } from './module/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreOProjetoComponent } from './module/home/sobre-oprojeto/sobre-oprojeto.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'informacoes', component: SobreOProjetoComponent}
]

@NgModule ({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}