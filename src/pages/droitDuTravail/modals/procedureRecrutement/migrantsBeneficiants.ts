import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@Component({
  selector: 'page-modal-migrants-beneficiants',
  templateUrl: 'migrantsBeneficiants.html'
})
export class ModalMigrantsBeneficiantsPage {

  constructor(public iab: InAppBrowser) {

  }

  openLink(link: string) {
    this.iab.create("http://" + link);
  }

}