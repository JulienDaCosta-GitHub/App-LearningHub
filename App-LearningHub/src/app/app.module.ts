import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { SafariViewController } from '@ionic-native/safari-view-controller/ngx';

import { AuthenticationService } from './services/authentication.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire'; // pour se connecter à Firebase
import { AngularFireDatabaseModule } from '@angular/fire/database'; // pour manipuler la base de données Firebase
import { AngularFireStorageModule } from '@angular/fire/storage'; // pour accéder aux fonction de stockage et de récupération des fichiers
<<<<<<< HEAD
import { AngularFireAuthModule } from '@angular/fire/auth';
import { Camera } from '@ionic-native/camera/ngx';
=======
>>>>>>> parent of 76e22e5... Add Camera
import { environment} from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
<<<<<<< HEAD
    Camera,
    AuthenticationService,
    SafariViewController,
=======
>>>>>>> parent of 76e22e5... Add Camera
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
