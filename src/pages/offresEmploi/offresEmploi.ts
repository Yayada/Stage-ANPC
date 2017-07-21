import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-offresEmploi',
  templateUrl: 'offresEmploi.html'
})
export class OffresEmploiPage {

  offres: string = "offresAnapec";

  constructor(public navCtrl: NavController, public iab: InAppBrowser) {

  }

  openLink(link: string) {
    this.iab.create("http://" + link);
  }

}