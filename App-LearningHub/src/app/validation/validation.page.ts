import { Component, OnInit } from '@angular/core';
import { ValidationProjetsModel, ValidationCoursModel } from './validation.model' ;


@Component({
  selector: 'app-validation',
  templateUrl: './validation.page.html',
  styleUrls: ['./validation.page.scss'],
})
export class ValidationPage implements OnInit {


  validationsProjets: ValidationProjetsModel[] = [
    {
      id: 0,
      title: 'BarbaJs' ,
      categorie: 'Web Design',
      url: 'https://i.pinimg.com/236x/ef/8e/a3/ef8ea321f0365aafe631c52e38f1d6b8.jpg'
    },
    {
      id: 0,
      title: 'BarbaJs' ,
      categorie: 'Web Design',
      url: 'https://i.pinimg.com/236x/ef/8e/a3/ef8ea321f0365aafe631c52e38f1d6b8.jpg'
    }
  ] ;
  validattionProjetsLength = this.validationsProjets.length ;


  validationsCours: ValidationCoursModel[] = [
    {
      id: 0,
      title: 'BarbaJs' ,
      categorie: 'Web Design',
      url: 'https://i.pinimg.com/236x/1e/c1/e8/1ec1e82d784b39ae763a93bb43a4e313.jpg'
    },
    {
      id: 0,
      title: 'BarbaJs' ,
      categorie: 'Web Design',
      url: 'https://i.pinimg.com/236x/1e/c1/e8/1ec1e82d784b39ae763a93bb43a4e313.jpg'
    }
  ];
  validattionCoursLength = this.validationsCours.length ;


  projets = true ;
  cours = false ;
  activeProjets(){
    this.projets = true;
    this.cours = false ;
  }
  activeCours(){
    this.cours = true ;
    this.projets = false;
  }


  constructor() {}




  ngOnInit() {
  }

}








