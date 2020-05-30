import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  mail: string = ""
  password: string = ""

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  async login() {
    const { mail, password } = this
    try {
      const res = await this.afAuth.signInWithEmailAndPassword(mail, password)
    } catch(err) {
      console.dir(err)
      if(err.code === "auth/user-not-found") {
        console.log("User not found")
      }
    }
  } 
}
