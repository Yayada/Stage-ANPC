import { Component } from '@angular/core';
import { NavController , ModalController } from 'ionic-angular';
import { ModalSitesRecrutementPage } from './modals/marcheTravail/sitesRecrutement';
import { ModalCentreRegionauxPage } from './modals/marcheTravail/centreRegionaux';
import { ModalActeursPublicPage } from './modals/marcheTravail/acteursPublic';
import { ModalSecteursRecrutePage } from './modals/secteursMetiers/secteursRecrute';
import { ModalMetiersPorteursPage } from './modals/secteursMetiers/metiersPorteurs';
import { ModalActeursInstitutionnelsPage } from './modals/acteursInstitutionnels/acteursInsitutionnels';

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
      case 13: modal = this.modalCtrl.create(ModalActeursPublicPage);
        modal.present();
        break;
      case 21: modal = this.modalCtrl.create(ModalSecteursRecrutePage);
        modal.present();
        break;
      case 22: modal = this.modalCtrl.create(ModalMetiersPorteursPage);
        modal.present();
        break;
      case 3: modal = this.modalCtrl.create(ModalActeursInstitutionnelsPage);
        modal.present();
        break;
    }    
  }
}
