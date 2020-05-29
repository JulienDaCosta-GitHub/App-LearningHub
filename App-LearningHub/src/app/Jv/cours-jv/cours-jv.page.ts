import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cours-jv',
  templateUrl: './cours-jv.page.html',
  styleUrls: ['./cours-jv.page.scss'],
})
export class CoursJvPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  toProjets()
  {
    this.router.navigateByUrl('projets-jv').then((data) => {
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
