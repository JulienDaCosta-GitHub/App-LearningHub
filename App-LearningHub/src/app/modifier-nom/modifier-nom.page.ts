import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-modifier-nom',
  templateUrl: './modifier-nom.page.html',
  styleUrls: ['./modifier-nom.page.scss'],
})
export class ModifierNomPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }


}
