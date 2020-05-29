import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cours-anim',
  templateUrl: './cours-anim.page.html',
  styleUrls: ['./cours-anim.page.scss'],
})
export class CoursAnimPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  toProjets()
  {
    this.router.navigateByUrl('projets-anim').then((data) => {
      console.log(data);
    });
  }
}
