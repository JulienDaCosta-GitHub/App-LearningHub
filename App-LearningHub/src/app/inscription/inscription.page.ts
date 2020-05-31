import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  dataUser = {
    email: '',
    password: ''
  };

  connected: boolean;
  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe( auth => {
      if (!auth){
        console.log('non connecté');
        this.connected = false;
      }
      else {
        console.log('connecté: ' + auth.uid);
        this.connected = true;
      }
    });
  }

  signUp(){
    this.afAuth.createUserWithEmailAndPassword(this.dataUser.email, this.dataUser.password);
    this.dataUser = {
      email: '',
      password: ''
    };
  }

  ngOnInit() {
  }

}
