import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-modal-faq-content',
  templateUrl: 'faqContentModal.html'
})
export class ModalFaqContentPage {

  content : any;

  constructor(public viewCtrl: ViewController, public params:NavParams) {

     this.content = params.get('modalContent');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}