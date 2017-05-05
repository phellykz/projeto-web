import { Routes, RouterModule } from '@angular/router'; 
import { ModuleWithProviders } from "@angular/core/core";

import { ListaVoluntariosComponent } from './lista-voluntarios/lista-voluntarios.component';
import { CadastroVoluntarioComponent } from './cadastro-voluntario/cadastro-voluntario.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const APP_ROUTES: Routes = [
    {path:'', component: HomeComponent},
    {path:'login', component: LoginComponent},
    {path:'cadastro-voluntario', component:CadastroVoluntarioComponent},
    {path:'lista-voluntarios', component:ListaVoluntariosComponent},
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
