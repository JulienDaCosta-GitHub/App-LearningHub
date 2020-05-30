import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

  username: string = ""
  password: string = ""
  cpassword: string = ""

  nom: string = ""
  prenom: string = ""

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  async register() {
    const { username, password, cpassword} = this
    if(password !== cpassword) {
      return console.error("Passwords don't match")
    }

    try {
      const res = await this.afAuth.createUserWithEmailAndPassword(username, password)
      console.log(res)
    } catch(error) {
        console.dir(error)
    } 
  }
}
