import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-anapec',
  templateUrl: 'anapec.html'
})
export class AnapecPage {

  anapec : string = "anapec";
  constructor(public navCtrl: NavController) {

  }

}