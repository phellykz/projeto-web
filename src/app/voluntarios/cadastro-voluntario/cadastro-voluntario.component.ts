import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { AngularFireAuth } from 'angularfire2/auth';

import { Endereco } from 'app/etidades/endereco';
import { Voluntario } from './../../etidades/voluntario';

@Component({
  selector: 'app-cadastro-voluntario',
  templateUrl: './cadastro-voluntario.component.html',
  styleUrls: ['./cadastro-voluntario.component.css']
})

export class CadastroVoluntarioComponent implements OnInit {
    email: string;
    confirmeSenha: string;

    mostrarMenuEmitter: any;

  checkBox: boolean;

  errorMensagem: string;
  sucessoMensagem: string;
  
  voluntario: Voluntario;
  voluntarios: FirebaseListObservable<any[]>;

  constructor(private af: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.voluntarios = af.list('/voluntario');
    this.voluntario = new Voluntario();
    
  }

  cadastrar() {
  
    this.initializeMessage();

    this.voluntario.tipo = 'voluntario';

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
    }/*else if (this.voluntario.email!=this.voluntario.confirmEmail) {
        this.errorMensagem= "A confirmação da senha não confere!"
    }*/else if(!this.existsEmail()){
        this.errorMensagem ="Este e-mail já existe, tente outro!";
    }else {
        if (this.voluntario.senha===this.confirmeSenha) {
            this.voluntarios.push(this.voluntario);
            this.register();
            this.voluntario = new Voluntario();
            this.sucessoMensagem = "Cadastro realizado com sucesso!";
            this.confirmeSenha = null;
        }else{
            alert("Senhas não conferem");
        }
    }
  }

register(){
    console.log(this.voluntario.email, this.voluntario.senha);
    this.afAuth.auth.createUserWithEmailAndPassword(this.voluntario.email, this.voluntario.senha);
}

  initializeMessage () {
     this.errorMensagem = null;
     this.sucessoMensagem = null;
  }


  changeCheckBox(){
     this.checkBox = !this.checkBox;
  }


  existsEmail(): boolean {
      return true;
  }

  ngOnInit() {

  }

}
