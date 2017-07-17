import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewController } from 'ionic-angular';


@Component({
  selector: 'page-modal-migrants-beneficiants',
  templateUrl: 'migrantsBeneficiants.html'
})
export class ModalMigrantsBeneficiantsPage {

  constructor(public navCtrl: NavController, public viewCtrl : ViewController) {

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}