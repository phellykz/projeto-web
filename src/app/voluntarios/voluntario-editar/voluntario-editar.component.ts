import { User } from 'firebase/app';

import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from "angularfire2/database";
import { AngularFireAuth } from "angularfire2/auth";

import { element } from 'protractor';

import { Usuario } from 'app/login/usuario';
import { Voluntario } from "app/etidades/voluntario";
import { Endereco } from "app/etidades/endereco";

import * as firebase from 'firebase';

declare var jQuery:any;

@Component({
  selector: 'app-voluntario-editar',
  templateUrl: './voluntario-editar.component.html',
  styleUrls: ['./voluntario-editar.component.css']
})
export class VoluntarioEditarComponent implements OnInit {
   
    haveLogin: boolean;

    email: string;
    confirmeSenha: string;

    isLoaded: boolean;
    altSenha:boolean;

    key:string;
    data:any;
    

  checkBox: boolean;

  errorMensagem: string;
  sucessoMensagem: string;
  
  usuario:Usuario;

  voluntario: Voluntario;
  voluntarios: FirebaseListObservable<Voluntario[]>;

  constructor(private af: AngularFireDatabase, private afAuth: AngularFireAuth) {
        this.isLoaded = false;
        this.altSenha = false;
        this.getVoluntario();    
  }


  getVoluntario() {
    firebase.auth().onAuthStateChanged(user => {
        if (user){
            this.voluntarios = this.af.list('/voluntario');
            this.voluntarios.subscribe(users => {
                users.forEach(element => {
                    if (element.email===user.email) {
                        this.voluntario=element;
                        this.isLoaded = true;                     
                    }
                });
            })
        }
    });
  }

  atualizar() {

    this.initializeMessage();    

    if (!this.voluntario.nome) {
        this.errorMensagem ="O campo nome é obrigatório!";
    }else if(!this.voluntario.telefone) {
       this.errorMensagem = "O campo Telefone é obrigatório!";
    }else if(!this.voluntario.endereco.rua) {
        this.errorMensagem= "O campo Rua é obrigatório!";    
    }else if(!this.voluntario.endereco.numero) {
        this.errorMensagem= "O campo Numero é obrigatório!";    
    }else if(!this.voluntario.endereco.cep) {
        this.errorMensagem= "O campo CEP é obrigatório!";    
    }else if(!this.voluntario.endereco.bairro) {
        this.errorMensagem= "O campo Bairro é obrigatório!";
    }else if(!this.voluntario.endereco.cidade) {
        this.errorMensagem= "O campo Cidade é obrigatório!";
    }else if(!this.voluntario.endereco.estado) {
        this.errorMensagem= "O campo Estado é obrigatório!";
    }else if(!this.voluntario.email) {
        this.errorMensagem= "O campo Email é obrigatório!";
    }else if(!this.voluntario.senha) {
        this.errorMensagem= "O campo Senha é obrigatório!";
    }else if(!this.existsEmail()){
        this.errorMensagem ="Este e-mail já existe, tente outro!";
    }else {
        let user = firebase.auth().currentUser;
        this.key = user.uid;
        this.data = this.voluntario;
        if (this.voluntario.senha===this.confirmeSenha) {
            this.update(this.key,this.data);      
        } else {
            alert("Senhas não conferem");
        }
    }
  }


update(key: string, data: any):Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.af.list('/voluntario').update(key, data)
                .then(() => resolve())
                .catch(error => reject(error))
        });
}

  initializeMessage () {
     this.errorMensagem = null;
     this.sucessoMensagem = null;
  }  


  existsEmail(): boolean {
      return true;     
  }

  ngOnInit() {
    
  }

}
