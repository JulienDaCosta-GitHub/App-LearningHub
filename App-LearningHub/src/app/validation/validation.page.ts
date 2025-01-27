import { Component, OnInit } from '@angular/core';
import { ValidationProjetsModel, ValidationCoursModel } from './validation.model' ;
import {AngularFireDatabase} from '@angular/fire/database';
import {AngularFireStorage} from '@angular/fire/storage';


@Component({
  selector: 'app-validation',
  templateUrl: './validation.page.html',
  styleUrls: ['./validation.page.scss'],
})
export class ValidationPage implements OnInit {
    images = [];


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


  constructor(public afDB: AngularFireDatabase,
              public afSG: AngularFireStorage) {
    this.getImagesDatabase();
  }

  getImagesDatabase() {
    // pour récupérer les informations des images
      this.afDB.list('Images').snapshotChanges(['child_added']).subscribe(images => {
          images.forEach(image => {
              this.getImagesStorage(image);
          });
      });
  }

    getImagesStorage(image: any) {
        const imgRef = image.payload.exportVal().ref;
        this.afSG.ref(imgRef).getDownloadURL().subscribe(imgUrl => {
            console.log(imgUrl);
            this.images.push({
                name: image.payload.exportVal().name,
                url: imgUrl
            });
        });
    }



  ngOnInit() {
  }

}








