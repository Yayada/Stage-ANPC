import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-modal-travail-etranger',
  templateUrl: 'travailEtranger.html'
})
export class ModalTravailEtrangerPage {

  constructor(public viewCtrl: ViewController) {

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}