import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-modal-prestation-agence',
  templateUrl: 'modalPrestationAgence.html'
})
export class ModalPrestationAgencePage {

  content : any;

  constructor(public viewCtrl: ViewController, public params:NavParams) {

     this.content = params.get('modalContent');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}