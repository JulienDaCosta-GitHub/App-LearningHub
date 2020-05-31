import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projets-dev',
  templateUrl: './projets-dev.page.html',
  styleUrls: ['./projets-dev.page.scss'],
})
export class ProjetsDevPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  toCours()
  {
    this.router.navigateByUrl('cours-dev').then((data) => {
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
