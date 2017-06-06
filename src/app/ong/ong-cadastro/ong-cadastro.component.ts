import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from "angularfire2/database";
import {AngularFireAuth} from 'angularfire2/auth';
import { Ong } from "app/etidades/ong";
import { Endereco } from "app/etidades/endereco";

@Component({
  selector: 'app-ong-cadastro',
  templateUrl: './ong-cadastro.component.html',
  styleUrls: ['./ong-cadastro.component.css']
})
export class OngCadastroComponent implements OnInit {

    confirmeSenha: string;
    mostrarMenuEmitter: any;

  errorMensagem: string;
  sucessoMensagem: string;
  checkBox: boolean;
  
  ong: Ong;
  ongs: FirebaseListObservable<any[]>;

  endereco: Endereco;
  enderecos: FirebaseListObservable<any[]>;

  constructor(private af: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.ongs = af.list('/ong');
    this.ong = new Ong();
    
  }

  cadastrar() {

    this.initializeMessage();
    
    this.ong.tipo="ong"
    
    if (!this.ong.nome) {
        console.log("aff..");
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
    }else if(!this.existsEmail()){
        this.errorMensagem ="Este e-mail já existe, tente outro!";
    }else {  
        if (this.ong.senha===this.confirmeSenha) {     
        this.ongs.push(this.ong);
        this.register();
        this.ong = new Ong();
        this.sucessoMensagem = "Cadastro realizado com sucesso!";
    }else{
        alert("Senhas não conferem");
    }
    }
  }

  register(){
    console.log(this.ong.email, this.ong.senha);
    this.afAuth.auth.createUserWithEmailAndPassword(this.ong.email, this.ong.senha);
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
