import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modifier-profil',
  templateUrl: './modifier-profil.page.html',
  styleUrls: ['./modifier-profil.page.scss'],
})
export class ModifierProfilPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  toModifierNom()
  {
    this.router.navigateByUrl('modifier-nom').then((data) => {
      console.log(data);
    });
  }
  toModifierPrenom()
  {
    this.router.navigateByUrl('modifier-prenom').then((data) => {
      console.log(data);
    });
  }
  toModifierMail()
  {
    this.router.navigateByUrl('modifier-mail').then((data) => {
      console.log(data);
    });
  }
  toModifierMdp()
  {
    this.router.navigateByUrl('modifier-mdp').then((data) => {
      console.log(data);
    });
  }

  toProfil()
  {
    this.router.navigateByUrl('profil').then((data) => {
      console.log(data);
    });
  }
}
