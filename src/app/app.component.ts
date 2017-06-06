
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, EventEmitter } from '@angular/core';
import { AuthService } from "app/login/auth.service";
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

import { Usuario } from 'app/login/usuario';

declare var jQuery:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  mostrarMenuVoluntario: boolean = false;
  mostrarMenuOng: boolean = false;
  mostrarMenu: boolean = false;


  title = 'app works!';

  

  constructor(){
    
  }

  checarTipo(usuario: any) {
    console.log("checando tipo")
    if (usuario.tipo==="voluntario") {
      this.mostrarMenu = true;
      this.mostrarMenuVoluntario = true;

    } else if (usuario.tipo==="ong") {
      this.mostrarMenu = true;
      this.mostrarMenuOng = true;

    }
  }

  ngOnInit(){
    jQuery(".button-collapse").sideNav();
  }
}

