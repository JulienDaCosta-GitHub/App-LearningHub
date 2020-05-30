import { Component, OnInit } from '@angular/core';
import {Categorie, CategorieService} from '../services/categorie.service';
import {ActivatedRoute} from '@angular/router';
import {LoadingController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-categorie-details',
  templateUrl: './categorie-details.page.html',
  styleUrls: ['./categorie-details.page.scss'],
})
export class CategorieDetailsPage implements OnInit {
  categorie: Categorie = {
    title: 'Graphic Design',
    imgUrl: 'https://i.pinimg.com/236x/ae/fc/05/aefc05419689fd304064cef0ca7c3a82.jpg'
  };

  categorieId = null ;

  constructor(private categorieService: CategorieService, private route: ActivatedRoute, private loadingController: LoadingController, private nav: NavController  ) { }

  ngOnInit() {
    this.categorieId = this.route.snapshot.params['id'];
    if (this.categorieId){
      this.loadCategorie();

    }
  }

  async loadCategorie(){
    const loading = await this.loadingController.create({
      message: 'Loading Categorie..'
    });
    await loading.present();
    this.categorieService.getCategorie(this.categorieId).subscribe(res => {
      loading.dismiss();
      this.categorie = res ;
    });

  }

  async saveCatgorie(){
    const loading = await this.loadingController.create({
      message: 'Loading Categorie..'
    });
    await loading.present();
    if (this.categorieId){
      this.categorieService.updateCategorie(this.categorie, this.categorieId).then(() => {
        loading.dismiss();
        this.nav.navigateBack('categories');

      });

    }else {
      this.categorieService.addCategorie(this.categorie).then(() => {
        loading.dismiss();
        this.nav.navigateBack('categories');

      });
    }
  }

}
