
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from "@angular/core/core";

import { Routes, RouterModule } from '@angular/router'; 

import { VoluntariosComponent } from './voluntarios.component';
import { ListaVoluntariosComponent } from './lista-voluntarios/lista-voluntarios.component';
import { CadastroVoluntarioComponent } from './cadastro-voluntario/cadastro-voluntario.component';
import { VoluntarioDetalhesComponent } from './voluntario-detalhes/voluntario-detalhes.component';
import { VoluntarioNaoEncotradoComponent } from './voluntario-nao-encotrado/voluntario-nao-encotrado.component';
import { VoluntarioEditarComponent } from "app/voluntarios/voluntario-editar/voluntario-editar.component";

const voluntariosRoutes: Routes = [
    {path:'voluntario', component: VoluntariosComponent},
    {path:'cadastro-voluntario', component:CadastroVoluntarioComponent},
    {path:'lista-voluntarios', component:ListaVoluntariosComponent},
    {path:'voluntario-detalhes', component:VoluntarioDetalhesComponent},
    {path:'voluntario-editar', component:VoluntarioEditarComponent},
    {path:'voluntario-nao-encontrado', component:VoluntarioNaoEncotradoComponent}
]

@NgModule({
    imports:[RouterModule.forChild(voluntariosRoutes)],
    exports:[RouterModule]
})

export class voluntariosRoutingModule{}