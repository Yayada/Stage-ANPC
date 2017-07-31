import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@Component({
  selector: 'page-modal-reseaux-contact',
  templateUrl: 'reseauxSociauxContact.html'
})
export class ModalReseauxContactPage {

  constructor(public iab: InAppBrowser 
  ) {

  }

  openLink(link: string) {
    this.iab.create(link);
  }

}