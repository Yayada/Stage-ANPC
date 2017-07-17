import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-modal-centre-regionaux',
  templateUrl: 'centreRegionaux.html'
})
export class ModalCentreRegionauxPage {

  constructor(public viewCtrl: ViewController, public iab: InAppBrowser,) {

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  openLink(link:string){
    this.iab.create("http://"+link);
  }

}