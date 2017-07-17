import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-modal-inscription-anapec',
  templateUrl: 'inscriptionAnapec.html'
})
export class ModalInscriptionAnapecPage {

  constructor(public viewCtrl: ViewController) {

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}