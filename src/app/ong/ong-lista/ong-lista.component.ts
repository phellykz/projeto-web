
import { Component, OnInit } from '@angular/core';

import { ongModule } from './../ong.module';
import { FirebaseListObservable, AngularFireDatabase } from "angularfire2/database";

import { Ong } from 'app/etidades/ong';

@Component({
  selector: 'app-ong-lista',
  templateUrl: './ong-lista.component.html',
  styleUrls: ['./ong-lista.component.css']
})
export class OngListaComponent implements OnInit {

ong: Ong;
ongs: FirebaseListObservable<any[]>;

  constructor(af: AngularFireDatabase) {
    this.ongs = af.list('/ong');       
  }

  ngOnInit() {
  }

}
