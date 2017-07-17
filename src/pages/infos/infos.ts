import { Component } from '@angular/core';
import { NavController , ModalController } from 'ionic-angular';
import { ModalSitesRecrutementPage } from './modals/marcheTravail/sitesRecrutement';
import { ModalCentreRegionauxPage } from './modals/marcheTravail/centreRegionaux';

@Component({
  selector: 'page-infos',
  templateUrl: 'infos.html'
})
export class InfosPage {

  infos : String = "marcheTravail";

  constructor(public navCtrl: NavController, public modalCtrl : ModalController) {

  }

  showModalDetails(index : number){

    let modal = null;
    switch (index) {

      case 11: modal = this.modalCtrl.create(ModalSitesRecrutementPage);
        modal.present();
        break;
      case 12: modal = this.modalCtrl.create(ModalCentreRegionauxPage);
        modal.present();
        break;
    }    
  }
}
