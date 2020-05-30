import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.page.html',
  styleUrls: ['./recherche.page.scss'],
})
export class RecherchePage implements OnInit {

  jsonData: any[];

  constructor(public router: Router) {
    this.initializaJSon();
  }

  filterJsonData(ev: any)
  {
    this.initializaJSon();
    const val = ev.target.value;
    if (val && val.trim() !== '' )
    {
      this.jsonData = this.jsonData.filter((item) => {
        return(item.name.toLowerCase() .indexOf(val.toLowerCase()) > - 1);
      });
    }
  }

  selectVal(val)
  {
    this.router.navigateByUrl('projets-crea').then((data) => {
      console.log(data);
    });
  }

  ngOnInit() {
  }

  initializaJSon()
  {
    this.jsonData = [
      {
        name: '3D',
        code: '3d'
      },
      {
        name: 'Création Design',
        code: 'CD'
      },
      {
        name: 'Communication Digitale',
        code: 'COMD'
      },
      {
        name: 'Développement web',
        code: 'DW'
      },
      {
        name: 'Jeux Vidéo',
        code: 'JV'
      }
    ];

  }
}
