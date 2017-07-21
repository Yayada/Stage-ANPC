import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-faq',
  templateUrl: 'faq.html'
})
export class FaqPage {

  faq : string = "eligibilite";
  constructor(public navCtrl: NavController) {

  }

}