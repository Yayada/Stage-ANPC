import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ModalContratInsertionPage } from './modals/formesContrat/contratInsertion';
import { ModalTravailEtrangerPage } from './modals/formesContrat/travailEtranger';
import { ModalAutreMigrantsPage } from './modals/procedureRecrutement/autreMigrants';
import { ModalMigrantsBeneficiantsPage } from './modals/procedureRecrutement/migrantsBeneficiants';

@Component({
  selector: 'page-droit-du-travail',
  templateUrl: 'droitDuTravail.html'
})
export class DroitDuTravailPage {

  droitTravail: String = "Législation pour les travailleurs étrangers";

  constructor(public navCtrl: NavController, private  modalCtrl: ModalController) {

  }

  showModalDetails(index : number){

    let modal = null;
    switch (index) {

      case 21: modal = this.modalCtrl.create(ModalMigrantsBeneficiantsPage);
        modal.present();
        break;
      case 22: modal = this.modalCtrl.create(ModalAutreMigrantsPage);
        modal.present();
        break;
      case 31: modal = this.modalCtrl.create(ModalTravailEtrangerPage);
        modal.present();
        break;
      case 32: modal = this.modalCtrl.create(ModalContratInsertionPage);
        modal.present();
        break;
    }    
  }



}