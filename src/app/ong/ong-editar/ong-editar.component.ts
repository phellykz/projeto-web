
import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from "angularfire2/database";

import { Usuario } from "app/login/usuario";
import { Voluntario } from "app/etidades/voluntario";
import { Ong } from './../../etidades/ong';
import { AngularFireAuth } from "angularfire2/auth";

import * as firebase from 'firebase';

@Component({
  selector: 'app-ong-editar',
  templateUrl: './ong-editar.component.html',
  styleUrls: ['./ong-editar.component.css']
})
export class OngEditarComponent implements OnInit {

  email: string;
  confirmeSenha: string;
  errorMensagem: string;
  sucessoMensagem: string;

  key:string;
  data:any;
  isLoaded: boolean;
  altSenha:boolean;

  ong: Ong;
  ongs: FirebaseListObservable<Ong[]>;

  constructor(private af:AngularFireDatabase, private afAuth: AngularFireAuth) { 
    this.isLoaded = false;
    this.altSenha = false;
    this.getOng();
  }



  getOng() {
    firebase.auth().onAuthStateChanged(user => {
        if (user){
            this.ongs = this.af.list('/ong');
            this.ongs.subscribe(users => {
                users.forEach(element => {
                    if (element.email===user.email) {
                        console.log("achou!")
                        this.ong=element;
                        this.isLoaded = true;
                        this.confirmeSenha = this.ong.senha;                        
                    }
                });
            })
        }
    });
  }


  atualizar(){

    this.initializeMessage();
    
    this.ong.tipo="ong"
    
    if (!this.ong.nome) {        
        this.errorMensagem ="O campo nome é obrigatório!";
    }else if(!this.ong.telefone) {
       this.errorMensagem = "O campo Telefone é obrigatório!";
    }else if(!this.ong.endereco.rua) {
        this.errorMensagem= "O campo Rua é obrigatório!";    
    }else if(!this.ong.endereco.numero) {
        this.errorMensagem= "O campo Numero é obrigatório!";    
    }else if(!this.ong.endereco.cep) {
        this.errorMensagem= "O campo CEP é obrigatório!";    
    }else if(!this.ong.endereco.bairro) {
        this.errorMensagem= "O campo Bairro é obrigatório!";
    }else if(!this.ong.endereco.cidade) {
        this.errorMensagem= "O campo Cidade é obrigatório!";
    }else if(!this.ong.endereco.estado) {
        this.errorMensagem= "O campo Estado é obrigatório!";
    }else if(!this.ong.fundacao) {
        this.errorMensagem= "O campo Fundação é obrigatório!";    
    }else if(!this.ong.descricao) {
        this.errorMensagem= "O campo Descrição é obrigatório!";
    }else if(!this.ong.email) {
        this.errorMensagem= "O campo Email é obrigatório!";
    }else if(!this.ong.senha) {
        this.errorMensagem= "O campo Senha é obrigatório!";
    }/*else if(!this.existsEmail()){
        this.errorMensagem ="Este e-mail já existe, tente outro!";
    }*/else { 
    let user = firebase.auth().currentUser;
    this.key = user.uid;
    this.data = this.ong;
      if (this.ong.senha===this.confirmeSenha) {
        this.update(this.key,this.data);      
      } else {
        alert("Senhas não conferem");
      }
    }
  }


  update(key:string, data:any) {
    return this.af.list('/ong').update(key,data)    
  }

  initializeMessage () {
     
     this.errorMensagem = null;
     this.sucessoMensagem = null;
  }

  ngOnInit() {
  }

}
