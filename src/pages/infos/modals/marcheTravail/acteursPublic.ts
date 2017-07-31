import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-modal-acteurs-public',
  templateUrl: 'acteursPublic.html'
})
export class ModalActeursPublicPage {

  constructor(public iab: InAppBrowser) {

  }

  openLink(link:string){
    this.iab.create("http://"+link);
  }

}