import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { ongRoutingModule } from './ong.routing.module';
import { OngNaoEncontradaComponent } from './ong-nao-encontrada/ong-nao-encontrada.component';
import { OngListaComponent } from './ong-lista/ong-lista.component';
import { OngDetalhesComponent } from './ong-detalhes/ong-detalhes.component';
import { OngCadastroComponent } from './ong-cadastro/ong-cadastro.component';
import { OngService } from './ong.service';
import { OngComponent } from './ong.component';
import { OngEditarComponent } from './ong-editar/ong-editar.component';


@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,        
        ongRoutingModule
       
    ],
    exports:[],
    declarations:[
       OngComponent,
       OngCadastroComponent,
       OngDetalhesComponent,
       OngListaComponent,
       OngNaoEncontradaComponent,
       OngEditarComponent
    ],
    providers:[OngService]
})

export class ongModule{}