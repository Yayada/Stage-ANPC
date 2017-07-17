import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-modal-portail-anapec',
  templateUrl: 'portailAnapec.html'
})
export class ModalPortailAnapecPage {


  constructor(public viewCtrl: ViewController) {

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}