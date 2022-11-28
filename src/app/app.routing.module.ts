import { SobreOProjetoComponent } from './module/sobre-oprojeto/sobre-oprojeto.component';
import { HomeComponent } from './module/home/home.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';


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