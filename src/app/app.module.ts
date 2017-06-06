import { AngularFireAuth } from 'angularfire2/auth';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from 'angular2-materialize';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { AngularFireModule } from "angularfire2/angularfire2";
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { voluntariosModule } from './voluntarios/voluntarios.module';
import { ongModule } from './ong/ong.module';
import { AuthService } from './login/auth.service';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { VoluntarioEditarComponent } from './voluntarios/voluntario-editar/voluntario-editar.component';
export const firebaseConfig = {   
    apiKey: "AIzaSyDt8AGeybMTOCOq9g3zU1ZRZXp5LKh_7NY",
    authDomain: "voluntarios-6950f.firebaseapp.com",
    databaseURL: "https://voluntarios-6950f.firebaseio.com",
    projectId: "voluntarios-6950f",
    storageBucket: "voluntarios-6950f.appspot.com",
    messagingSenderId: "513877002047"    
  };

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    VoluntarioEditarComponent,
    
  ],
  imports: [
    MaterializeModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    voluntariosModule,
    ongModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    //AngularFireModule.initializeApp(environment.firebase,'voluntario'),
    AngularFireDatabaseModule,
    AngularFireAuthModule
   
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }
