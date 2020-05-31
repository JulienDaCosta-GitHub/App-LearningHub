import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire'; // pour se connecter à Firebase
import { AngularFireDatabaseModule } from '@angular/fire/database'; // pour manipuler la base de données Firebase
import { AngularFireStorageModule } from '@angular/fire/storage'; // pour accéder aux fonction de stockage et de récupération des fichiers

import { AngularFireAuthModule } from '@angular/fire/auth';
import { Camera } from '@ionic-native/camera/ngx';

import { environment} from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireAuthModule],
  providers: [
    StatusBar,
    SplashScreen,

    Camera,
    SafariViewController,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
