import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-modal-autre-migrants',
  templateUrl: 'autreMigrants.html'
})
export class ModalAutreMigrantsPage {

  constructor(public navCtrl: NavController, public viewCtrl : ViewController) {

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}