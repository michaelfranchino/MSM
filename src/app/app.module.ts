import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import 'rxjs/add/operator/do';

import { AppComponent } from './app.component';

import {PeopleService} from '../services/people.service';

export const firebaseConfig = {
    apiKey: "AIzaSyA3SvSyCsnWvfDFTXpSqTjq8KJzELM5J1g",
    authDomain: "makerspace-manager.firebaseapp.com",
    databaseURL: "https://makerspace-manager.firebaseio.com",
    storageBucket: "makerspace-manager.appspot.com",
    messagingSenderId: "1017436588317"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
