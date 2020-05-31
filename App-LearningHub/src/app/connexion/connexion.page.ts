import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { LoadingController, AlertController } from '@ionic/angular';

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

  constructor(public afAuth: AngularFireAuth, public loadingController: LoadingController,
              public alertController: AlertController) {
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

   async login() {

     const loading = await this.loadingController.create();
     await loading.present();
        this.afAuth.signInWithEmailAndPassword(this.dataUser.email, this.dataUser.password);
        this.dataUser = {
            email: '',
            password: ''
        };

     await loading.dismiss();
      const alert = await this.alertController.create({
        header: 'Félicitation',
        message: 'Vous êtes bien connecté',
        buttons: ['OK']
      });
      await alert.present();
    }

    logout(){
      this.afAuth.signOut();
    }
  ngOnInit() {
  }

}









