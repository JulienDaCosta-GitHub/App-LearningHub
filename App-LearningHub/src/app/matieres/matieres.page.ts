import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matieres',
  templateUrl: './matieres.page.html',
  styleUrls: ['./matieres.page.scss'],
})
export class MatieresPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  toDocuments()
  {
    this.router.navigateByUrl('accueil').then((data) => {
      console.log(data);
    });
  }
  toAnim()
  {
    this.router.navigateByUrl('projets-anim').then((data) => {
      console.log(data);
    });
  }
  toCrea()
  {
    this.router.navigateByUrl('projets-crea').then((data) => {
      console.log(data);
    });
  }
  toComd()
  {
    this.router.navigateByUrl('projets-comd').then((data) => {
      console.log(data);
    });
  }
  toDev()
  {
    this.router.navigateByUrl('projets-dev').then((data) => {
      console.log(data);
    });
  }
  toJv()
  {
    this.router.navigateByUrl('projets-jv').then((data) => {
      console.log(data);
    });
  }

}
