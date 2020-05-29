import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projets-anim',
  templateUrl: './projets-anim.page.html',
  styleUrls: ['./projets-anim.page.scss'],
})
export class ProjetsAnimPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  toCours()
  {
    this.router.navigateByUrl('cours-anim').then((data) => {
      console.log(data);
    });
  }

}
