import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { PhotoViewer } from '@ionic-native/photo-viewer';

@Component({
  selector: 'page-modal-secteurs-recrute',
  templateUrl: 'secteursRecrute.html'
})
export class ModalSecteursRecrutePage {

  constructor( public iab: InAppBrowser,private photoViewer: PhotoViewer) {

  }

  openLink(link:string){
    this.iab.create("http://"+link);
  }

  showImage(link : string){
    this.photoViewer.show(link);
  }
}