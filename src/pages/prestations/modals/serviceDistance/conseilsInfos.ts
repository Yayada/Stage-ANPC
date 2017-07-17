import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-modal-coneils-infos',
  templateUrl: 'conseilsInfos.html'
})
export class ModalConseilsInfosPage {


  constructor(public viewCtrl: ViewController) {

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}