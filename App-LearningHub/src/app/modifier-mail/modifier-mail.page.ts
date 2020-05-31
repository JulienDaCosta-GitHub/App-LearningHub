import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-modifier-mail',
  templateUrl: './modifier-mail.page.html',
  styleUrls: ['./modifier-mail.page.scss'],
})
export class ModifierMailPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
