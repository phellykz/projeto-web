import { OngEditarComponent } from './ong-editar/ong-editar.component';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router'; 

import { OngNaoEncontradaComponent } from './ong-nao-encontrada/ong-nao-encontrada.component';
import { OngDetalhesComponent } from './ong-detalhes/ong-detalhes.component';
import { OngListaComponent } from './ong-lista/ong-lista.component';
import { OngCadastroComponent } from './ong-cadastro/ong-cadastro.component';
import { OngComponent } from './ong.component';


const ongRoutes: Routes = [
    {path:'ong', component: OngComponent},
    {path:'ong-cadastro', component:OngCadastroComponent},
    {path:'ong-detalhes', component:OngDetalhesComponent},
    {path:'ong-editar', component:OngEditarComponent},
    {path:'ong-lista', component:OngListaComponent},
    {path:'ong-nao-encontrada', component:OngNaoEncontradaComponent}
]

@NgModule({
    imports:[RouterModule.forChild(ongRoutes)],
    exports:[RouterModule]
})

export class ongRoutingModule{}