import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cours-comd',
  templateUrl: './cours-comd.page.html',
  styleUrls: ['./cours-comd.page.scss'],
})
export class CoursComdPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  toProjets()
  {
    this.router.navigateByUrl('projets-comd').then((data) => {
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
