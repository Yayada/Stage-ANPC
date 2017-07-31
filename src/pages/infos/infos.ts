import { Component } from '@angular/core';
import { NavController /*, ModalController */} from 'ionic-angular';

import { ModalSitesRecrutementPage } from './modals/marcheTravail/sitesRecrutement';
import { ModalCentreRegionauxPage } from './modals/marcheTravail/centreRegionaux';
import { ModalActeursPublicPage } from './modals/marcheTravail/acteursPublic';
import { ModalSecteursRecrutePage } from './modals/secteursMetiers/secteursRecrute';
import { ModalMetiersPorteursPage } from './modals/secteursMetiers/metiersPorteurs';
import { ModalActeursInstitutionnelsPage } from './modals/acteursInstitutionnels/acteursInsitutionnels';
import { ModalAssociationsPage } from './modals/acteursChamps/associations';
import { ModalAssociationsSubPage } from './modals/acteursChamps/associationsSub';

@Component({
  selector: 'page-infos',
  templateUrl: 'infos.html'
})
export class InfosPage {

  infos : String = "marcheTravail";
  marcheTravailRubriques : string = "Acteurs publics prives";
  acteursRubriques : string = "Associations";

  constructor(public navCtrl: NavController/*, public modalCtrl : ModalController*/) {

  }

  /*
  showModalDetails(index : number){

    let modal = null;
    switch (index) {

      case 111: modal = this.modalCtrl.create(ModalSitesRecrutementPage);
        modal.present();
        break;
      case 112: modal = this.modalCtrl.create(ModalCentreRegionauxPage);
        modal.present();
        break;
      case 113: modal = this.modalCtrl.create(ModalActeursPublicPage);
        modal.present();
        break;
      case 121: modal = this.modalCtrl.create(ModalSecteursRecrutePage);
        modal.present();
        break;
      case 122: modal = this.modalCtrl.create(ModalMetiersPorteursPage);
        modal.present();
        break;
      case 13: modal = this.modalCtrl.create(ModalActeursInstitutionnelsPage);
        modal.present();
        break;
      case 21: modal = this.modalCtrl.create(ModalAssociationsPage);
        modal.present();
        break;
      case 22: modal = this.modalCtrl.create(ModalAssociationsSubPage);
        modal.present();
        break;
    }    
  }*/
}
