
import { Ong } from './../etidades/ong';
import { Voluntario } from 'app/etidades/voluntario';

import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FirebaseListObservable, AngularFireDatabase } from "angularfire2/database";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Login } from './login';
import { LoginModule } from './login.module';
import { Usuario } from "app/login/usuario";
import { AuthService } from "app/login/auth.service";

import { OngEditarComponent } from './../ong/ong-editar/ong-editar.component';
import { AppComponent } from './../app.component';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AngularFireAuth]  
})

export class LoginComponent implements OnInit {

  errorMensagem: string;

  usuario: Usuario = new Usuario();

  voluntario: Voluntario;
  voluntarios: FirebaseListObservable<any[]>;

  ong: Ong;
  ongs: FirebaseListObservable<any[]>;

  constructor( private appComponent: AppComponent,
    private af: AngularFireDatabase, 
    private afAuth: AngularFireAuth,
    private router: Router) {
    
  }  

  initializeMessage () {     
     this.errorMensagem = null;     
  }

  mostrarMessageErro(){
    this.errorMensagem = "usuario ou senha invalidos!";
  } 

  fazerLogin(){

    try {
    firebase.auth().onAuthStateChanged(user => {
        if (user){
            this.ongs = this.af.list('/ong');
            this.ongs.subscribe(users => {
                users.forEach(element => {
                    if (element.email===this.usuario.email&&element.senha===this.usuario.password) {
                        this.router.navigate(['ong']);
                        this.appComponent.checarTipo(element); 
                        alert('Login realizado com sucesso');                        
                    }
                });
            })
        }
    });

        firebase.auth().onAuthStateChanged(user => {
            if (user){
                this.voluntarios = this.af.list('/voluntario');
                this.voluntarios.subscribe(users => {
                    users.forEach(element => {
                        if (element.email===this.usuario.email&&element.senha===this.usuario.password) {
                            this.router.navigate(['voluntario']);
                            this.appComponent.checarTipo(element); 
                            alert('Login realizado com sucesso');                        
                        }
                    });
                })
            }
        });
    
        
        } catch (error) {
            this.mostrarMessageErro();
            //alert('Email ou senha inválida!');
        }      
    }

  ngOnInit() {
  }
   
}
