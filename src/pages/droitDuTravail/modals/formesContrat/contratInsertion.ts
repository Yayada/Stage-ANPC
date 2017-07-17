import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-modal-contrat-insertion',
  templateUrl: 'contratInsertion.html'
})
export class ModalContratInsertionPage {


  constructor(public viewCtrl: ViewController) {

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}