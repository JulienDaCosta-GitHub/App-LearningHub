import { Component, OnInit } from '@angular/core';
import { ValidationProjetsModel, ValidationCoursModel } from './validation.model' ;
import {AngularFireDatabase} from '@angular/fire/database';
import {AngularFireStorage} from '@angular/fire/storage';
import {Router} from '@angular/router';


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
      id: 1,
      title: 'Illustrator' ,
      categorie: 'Graphic Design',
      url: 'https://i.pinimg.com/236x/6a/07/45/6a07451631ad1dd24cce8b73ea5fc62b.jpg'
    },

      {
          id: 2,
          title: 'test' ,
          categorie: 'UX/UI',
          url: 'assets/img/fleurs.png'
      }
  ] ;




  validattionProjetsLength = this.validationsProjets.length ;


  validationsCours: ValidationCoursModel[] = [
    {
      id: 0,
      title: 'Web design' ,
      categorie: 'Web Design',
      url: 'https://i.pinimg.com/236x/1e/c1/e8/1ec1e82d784b39ae763a93bb43a4e313.jpg'
    },
    {
      id: 0,
      title: 'React' ,
      categorie: 'Dev',
      url: 'data:image/png;base64,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'
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
              public afSG: AngularFireStorage,
              public router: Router) {
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








