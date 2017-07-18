import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-modal-acteurs-intitutionnels',
  templateUrl: 'acteursInstitutionnels.html'
})
export class ModalActeursInstitutionnelsPage {

  constructor(public viewCtrl: ViewController, public iab: InAppBrowser) {

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  openLink(link:string){
    this.iab.create("http://"+link);
  }

}