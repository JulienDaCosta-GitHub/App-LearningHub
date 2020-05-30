import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenue',
  templateUrl: './bienvenue.page.html',
  styleUrls: ['./bienvenue.page.scss'],
})
export class BienvenuePage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  toConnect()
  {
    this.router.navigateByUrl('connexion').then((data) => {
      console.log(data);
    });
  }

  toInscription()
  {
    this.router.navigateByUrl('inscription').then((data) => {
      console.log(data);
    });
  }
}
