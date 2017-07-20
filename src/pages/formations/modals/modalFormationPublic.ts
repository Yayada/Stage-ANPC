import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@Component({
  selector: 'page-modal-formation-public',
  templateUrl: 'modalFormationPublic.html'
})
export class ModalFormationPublicPage {

  content : any;

  constructor(public viewCtrl: ViewController, public params:NavParams,public iab: InAppBrowser) {

     this.content = params.get('modalContent');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

    openLink(link: string) {
    this.iab.create("http://" + link);
  }

}