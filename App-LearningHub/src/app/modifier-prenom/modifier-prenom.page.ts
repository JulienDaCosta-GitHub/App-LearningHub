import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-modifier-prenom',
  templateUrl: './modifier-prenom.page.html',
  styleUrls: ['./modifier-prenom.page.scss'],
})
export class ModifierPrenomPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
