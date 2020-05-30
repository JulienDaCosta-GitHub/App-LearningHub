import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export interface Categorie{
  title: string ;
  imgUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private categoriesCollection: AngularFirestoreCollection<Categorie> ;
  private categories: Observable<Categorie[]>;
  constructor(db: AngularFirestore ) {
    this.categoriesCollection = db.collection<Categorie>('categories');

    this.categories = this.categoriesCollection.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data};
          });
        })
    );

  }

  getCategories(){
    return this.categories;
  }
  getCategorie(id){
    return this.categoriesCollection.doc<Categorie>(id).valueChanges();
  }
  updateCategorie(categorie: Categorie, id: string){
    return this.categoriesCollection.doc(id).update(categorie);
  }
  addCategorie(categorie: Categorie){
    return this.categoriesCollection.add(categorie);
  }
  removeCategorie(id){
    return this.categoriesCollection.doc(id).delete();
  }

}
