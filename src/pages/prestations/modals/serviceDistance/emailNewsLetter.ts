import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'page-modal-email-newsLetter',
  templateUrl: 'emailNewsLetter.html'
})
export class ModalEmailNewsLetterPage {


  constructor(public viewCtrl: ViewController) {

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}