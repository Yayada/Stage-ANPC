import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-modal-autre-migrants',
  templateUrl: 'autreMigrants.html'
})
export class ModalAutreMigrantsPage {

  constructor(public navCtrl: NavController, public viewCtrl : ViewController, public iab: InAppBrowser) {

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  
  openLink(link:string){
    this.iab.create("http://"+link);
  }


}