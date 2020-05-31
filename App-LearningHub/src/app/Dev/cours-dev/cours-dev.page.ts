import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cours-dev',
  templateUrl: './cours-dev.page.html',
  styleUrls: ['./cours-dev.page.scss'],
})
export class CoursDevPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  toProjets()
  {
    this.router.navigateByUrl('projets-dev').then((data) => {
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
