import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { VoluntariosService } from './voluntarios.service';
import { ListaVoluntariosComponent } from './lista-voluntarios/lista-voluntarios.component';
import { VoluntariosComponent } from './voluntarios.component';
import { CadastroVoluntarioComponent } from './cadastro-voluntario/cadastro-voluntario.component';
import { VoluntarioDetalhesComponent } from './voluntario-detalhes/voluntario-detalhes.component';
import { VoluntarioNaoEncotradoComponent } from './voluntario-nao-encotrado/voluntario-nao-encotrado.component';
import { voluntariosRoutingModule } from "app/voluntarios/voluntarios.routing.module";


@NgModule({
    imports: [
        CommonModule,
        voluntariosRoutingModule,
        BrowserModule, 
        FormsModule
        
    ],
    exports:[],
    declarations:[
        VoluntariosComponent,
        CadastroVoluntarioComponent,
        ListaVoluntariosComponent,
        VoluntarioDetalhesComponent,
        VoluntarioNaoEncotradoComponent        
    ],
    providers:[VoluntariosService]
})

export class voluntariosModule{}
