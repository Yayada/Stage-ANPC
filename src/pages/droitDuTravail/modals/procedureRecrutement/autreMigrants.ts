import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-modal-autre-migrants',
  templateUrl: 'autreMigrants.html'
})
export class ModalAutreMigrantsPage {

  constructor(public iab: InAppBrowser) {

  }

  openLink(link:string){
    this.iab.create("http://"+link);
  }

}