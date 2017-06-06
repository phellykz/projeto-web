
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Voluntario } from 'app/etidades/voluntario';

@Component({
  selector: 'app-lista-voluntarios',
  templateUrl: './lista-voluntarios.component.html',
  styleUrls: ['./lista-voluntarios.component.css']
})
export class ListaVoluntariosComponent implements OnInit {

  voluntario: Voluntario;
  voluntarios: FirebaseListObservable<any[]>;

  constructor(private af: AngularFireDatabase) { 
    this.voluntarios = af.list('/voluntario')
  }

  ngOnInit() {
  }

}
