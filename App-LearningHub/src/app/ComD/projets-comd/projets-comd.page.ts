import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projets-comd',
  templateUrl: './projets-comd.page.html',
  styleUrls: ['./projets-comd.page.scss'],
})
export class ProjetsComdPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  toCours()
  {
    this.router.navigateByUrl('cours-comd').then((data) => {
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
