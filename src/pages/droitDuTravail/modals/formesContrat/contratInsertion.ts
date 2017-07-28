import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-modal-contrat-insertion',
  templateUrl: 'contratInsertion.html'
})
export class ModalContratInsertionPage {

  constructor(public iab: InAppBrowser) {

  }

  openLink(link: string) {
    this.iab.create("http://" + link);
  }

}