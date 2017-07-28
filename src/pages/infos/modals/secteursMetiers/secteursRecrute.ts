import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { PhotoViewer } from '@ionic-native/photo-viewer';

@Component({
  selector: 'page-modal-secteurs-recrute',
  templateUrl: 'secteursRecrute.html'
})
export class ModalSecteursRecrutePage {

  constructor(public viewCtrl: ViewController, public iab: InAppBrowser,private photoViewer: PhotoViewer) {

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  openLink(link:string){
    this.iab.create("http://"+link);
  }

  showImage(link : string){
    console.log("clicked");
    this.photoViewer.show(link);

  }
}