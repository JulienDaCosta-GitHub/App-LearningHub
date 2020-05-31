import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  toAccueil(){
    this.router.navigateByUrl('accueil').then((data) => {
      console.log(data);
    });
  }

  toAjout(){
    this.router.navigateByUrl('ajout').then((data) => {
      console.log(data);
    });
  }
  toProfil(){
    this.router.navigateByUrl('profil').then((data) => {
      console.log(data);
    });
  }
}
