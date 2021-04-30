import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Tab1Page} from "../tab1/tab1.page";
import { Photo, PhotoService } from '../services/photo.service';
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  tab1Page: Tab1Page;
  
  constructor(public navCtrl: NavController, 
              public photoService: PhotoService, 
    public actionSheetController: ActionSheetController) {}

  async ngOnInit() {
    await this.photoService.loadSaved();
  }

addPhotoToGallery() {
  this.photoService.addNewToGallery();
}

public async showActionSheet(photo: Photo, position: number) {
  const actionSheet = await this.actionSheetController.create({
    header: 'Photos',
    buttons: [{
      text: 'Delete',
      role: 'destructive',
      icon: 'trash',
      handler: () => {
        this.photoService.deletePicture(photo, position);
      }
    }, {
      text: 'Cancel',
      icon: 'close',
      role: 'cancel',
      handler: () => {
        // Nothing to do, action sheet is automatically closed
        }
    }]
  });
  await actionSheet.present();
}

//  goHome(){
//    this.navCtrl.navigateForward('tab1')
//  }
 
  }
