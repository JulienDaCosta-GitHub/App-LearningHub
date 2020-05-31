import { Component, OnInit } from '@angular/core';
/*import { CategoriesModel } from './categories.model' ;*/
import {Categorie, CategorieService} from '../services/categorie.service';




@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {

  /*categories2: CategoriesModel[] = [{
    title: 'Graphic Design',
  imgUrl: 'https://i.pinimg.com/236x/ae/fc/05/aefc05419689fd304064cef0ca7c3a82.jpg'
  },
    {
      title: 'UX/UI Design',
      imgUrl: 'https://i.pinimg.com/236x/17/20/e8/1720e864202ef28ce30028c60c2eba1f.jpg'
    },
    {
      title: 'Web Design',
      imgUrl: 'https://i.pinimg.com/236x/40/a4/b2/40a4b25b696df7370351c62452921307.jpg'
    }
  ];*/
  /*
  actual = true;
  new = false;
  activeNew(){
    this.new = true;
    this.actual = false;
  }
  desactiveNew(){
    this.actual = true;
    this.new = false;
  }*/


  categories: Categorie[];


  constructor(private categorieService: CategorieService) { }

  ngOnInit() {
    this.categorieService.getCategories().subscribe(res => {
      this.categories = res ;
    });
  }
  remove(item){
    this.categorieService.removeCategorie(item.id);
  }


}
