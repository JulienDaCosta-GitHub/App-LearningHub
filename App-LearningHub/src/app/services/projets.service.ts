import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export interface Projet{
  title: string ;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjetsService {

  private projetsCollection: AngularFirestoreCollection<Projet> ;
  private projets: Observable<Projet[]>;
  constructor(db: AngularFirestore ) {
    this.projetsCollection = db.collection<Projet>('projets');

    this.projets = this.projetsCollection.snapshotChanges().pipe(
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
    return this.projets;
  }
  getCategorie(id){
    return this.projetsCollection.doc<Projet>(id).valueChanges();
  }
  updateCategorie(projet: Projet, id: string){
    return this.projetsCollection.doc(id).update(projet);
  }
  addCategorie(projet: Projet){
    return this.projetsCollection.add(projet);
  }
  removeCategorie(id){
    return this.projetsCollection.doc(id).delete();
  }

}
