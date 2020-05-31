import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions} from '@ionic-native/camera/ngx';
import { AngularFireStorage } from '@angular/fire/storage';
import { LoadingController, AlertController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';



@Component({
  selector: 'app-ajout-form',
  templateUrl: './ajout-form.page.html',
  styleUrls: ['./ajout-form.page.scss'],
})
export class AjoutFormPage implements OnInit {
  image = 'https://www.kasterencultuur.nl/editor/placeholder.jpg';
  imagePath: string;
  upload: any;
  titre: 'Titre';
  description: 'Description';

  constructor(public loadingController: LoadingController,
              public alertController: AlertController,
              public afSG: AngularFireStorage,
              public afDB: AngularFireDatabase,
              private camera: Camera) { }
  async addPhoto(source: string) {
    if (source === 'library')
    {
      const libraryImage = await this.openLibrary();
      this.image = 'data:image/jpg;base64,' + libraryImage;
    }
    else {

      const cameraPhoto = await this.openCamera();
      this.image = 'data:image/jpg;base64,' + cameraPhoto;
    }



  }

  async openLibrary() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };
    return await this.camera.getPicture(options);
  }

  async openCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000,
      sourceType: this.camera.PictureSourceType.CAMERA
    };
    return await this.camera.getPicture(options);
  }

 async uploadFirebase(){

    const loading = await this.loadingController.create();
    await loading.present();

    this.imagePath = 'Projets/' + new Date().getTime() + '.jpg';


    this.upload = this.afSG.ref(this.imagePath).putString(this.image, 'data_url');
    this.upload = this.afDB.list('projetsDetails/').push(this.titre);
    this.upload = this.afDB.list('projetsDetails/').push(this.description);

    this.upload.then(async () => {
      this.image = 'https://www.kasterencultuur.nl/editor/placeholder.jpg';

      await loading.dismiss();

      const alert = await this.alertController.create({
        header: 'Félicitation',
        message: 'Le projet a été ajouté !',
        buttons: ['OK']
      });
      await alert.present();

    });



 }




  ngOnInit() {
  }

}
