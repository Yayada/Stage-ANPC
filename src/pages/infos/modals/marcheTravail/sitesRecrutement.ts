import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-modal-sites-recrutement',
  templateUrl: 'sitesRecrutement.html'
})
export class ModalSitesRecrutementPage {

  constructor( public iab: InAppBrowser) {

  }

  openLink(link:string){
    this.iab.create("http://"+link);
  }

}