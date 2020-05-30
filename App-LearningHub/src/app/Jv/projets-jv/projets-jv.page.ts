import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projets-jv',
  templateUrl: './projets-jv.page.html',
  styleUrls: ['./projets-jv.page.scss'],
})
export class ProjetsJvPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  toCours()
  {
    this.router.navigateByUrl('cours-jv').then((data) => {
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
