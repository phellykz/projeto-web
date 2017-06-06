
import { Injectable, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";

import { Usuario } from './usuario';

import { voluntariosModule } from './../voluntarios/voluntarios.module';
import { Voluntario } from "app/etidades/voluntario";
import { CadastroVoluntarioComponent } from './../voluntarios/cadastro-voluntario/cadastro-voluntario.component';
import { LoginComponent } from './login.component';

@Injectable()

export class AuthService {
  
  errorMessage: string;

  voluntarios: any;

  voluntarioAutenticado: boolean;
  opcao: boolean = true;
  
  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();
  mostrarMenuVoluntarioEmitter = new EventEmitter<boolean>();
  mostrarMenuOngEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogof(){
      this.mostrarMenuVoluntarioEmitter.emit(false);
      this.mostrarMenuOngEmitter.emit(false);
      this.mostrarMenuEmitter.emit(false);
  }

  initializeMessage () {
     this.errorMessage = null;
  }
  
  fazerLogin(usuario: Usuario){
  if( usuario.tipo==='voluntario'&&usuario.email==='usuario@email.com'&&usuario.password==='123'){

      this.voluntarioAutenticado = true;
      this.opcao=true;
      this.mostrarMenuEmitter.emit(true);
      this.mostrarMenuVoluntarioEmitter.emit(true);

      this.router.navigate(['/voluntario']);

    }else if( usuario.tipo==='ong'&&usuario.email==='usuario@email.com'&&usuario.password==='123'){

      this.voluntarioAutenticado = true;
      this.opcao= false;
      this.mostrarMenuEmitter.emit(true);
      this.mostrarMenuOngEmitter.emit(true);

      this.router.navigate(['/ong']);    
    
    }else{
      this.voluntarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
      this.mostrarMenuVoluntarioEmitter.emit(false);
      this.errorMessage = "usuario ou senha invalidos!";    
    }
  }

    voluntarioEstaAutenticado(){
      return this.usuarioAutenticado;
    }

    

}
