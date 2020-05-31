import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  toSubjects()
  {
    this.router.navigateByUrl('matieres').then((data) => {
      console.log(data);
    });
  }
  clickedSearch(){
    this.router.navigateByUrl('recherche').then((data) => {
      console.log(data);
    });
  }

}
