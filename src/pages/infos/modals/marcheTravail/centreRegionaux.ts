import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-modal-centre-regionaux',
  templateUrl: 'centreRegionaux.html'
})
export class ModalCentreRegionauxPage {

  constructor( public iab: InAppBrowser) {

  }

  openLink(link:string){
    this.iab.create("http://"+link);
  }

}