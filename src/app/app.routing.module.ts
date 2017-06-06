import { NgModule } from '@angular/core';
import { ModuleWithProviders } from "@angular/core/core";

import { Routes, RouterModule } from '@angular/router'; 

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
    {path:'', component: HomeComponent},
    {path:'login', component: LoginComponent},

]

@NgModule({
    imports:[RouterModule.forRoot(appRoutes, {useHash: true})],
    exports:[RouterModule]
})

export class AppRoutingModule{}
