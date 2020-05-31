import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projets-crea',
  templateUrl: './projets-crea.page.html',
  styleUrls: ['./projets-crea.page.scss'],
})
export class ProjetsCreaPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  toCours()
  {
    this.router.navigateByUrl('cours-crea').then((data) => {
      console.log(data);
    });
  }
  clickedSearch()
  {
    this.router.navigateByUrl('recherche').then((data) => {
      console.log(data);
    });
  }
}
