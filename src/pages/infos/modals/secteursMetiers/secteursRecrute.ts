import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-modal-secteurs-recrute',
  templateUrl: 'secteursRecrute.html'
})
export class ModalSecteursRecrutePage {

  constructor(public viewCtrl: ViewController, public iab: InAppBrowser) {

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  openLink(link:string){
    this.iab.create("http://"+link);
  }

}