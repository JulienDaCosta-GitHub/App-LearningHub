import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cours-crea',
  templateUrl: './cours-crea.page.html',
  styleUrls: ['./cours-crea.page.scss'],
})
export class CoursCreaPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  toProjets()
  {
    this.router.navigateByUrl('projets-crea').then((data) => {
      console.log(data);
    });
  }

}
