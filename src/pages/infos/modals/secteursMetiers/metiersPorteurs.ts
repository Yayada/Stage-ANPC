import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-modal-metiers-porteurs',
  templateUrl: 'metiersPorteurs.html'
})
export class ModalMetiersPorteursPage {

  constructor(public iab: InAppBrowser) {

  }
  
  openLink(link:string){
    this.iab.create("http://"+link);
  }

}