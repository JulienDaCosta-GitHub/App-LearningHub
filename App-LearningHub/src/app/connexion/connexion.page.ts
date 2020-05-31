import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {
  dataUser = {
    email: '',
    password: ''
  };

  connected: boolean;

  email = '';
  userId = '';
  method = '' ;

  constructor(public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe( auth => {
      if (!auth){
        console.log('non connecté');
        this.connected = false;
      }
      else {
        console.log('connecté: ' + auth.uid);
        this.userId = auth.uid;
        this.email = auth.email;
        this.method = auth.providerData[0].providerId;
        this.connected = true;
      }
    });
  }

    login() {
        this.afAuth.signInWithEmailAndPassword(this.dataUser.email, this.dataUser.password);
        this.dataUser = {
            email: '',
            password: ''
        };
    }

    logout(){
      this.afAuth.signOut();
    }
  ngOnInit() {
  }

}









