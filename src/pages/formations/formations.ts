import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

//import { ModalFormationPublicPage } from './modals/modalFormationPublic';

import { FormationProvider } from '../../providers/formation-service/formation-service';

@Component({
  selector: 'page-formations',
  templateUrl: 'formations.html'
})
export class FormationsPage {

  formations: String = "trouverFormation";
  formationPublicRubriques:string = "OFPPT";
  modalContents: Array<{ index: number, content: {} }> = [];
  locations: Array<{}>;

  constructor(public navCtrl: NavController, public formationService: FormationProvider/*, public modalCtrl: ModalController*/, public iab: InAppBrowser) {

    /*this.formationService.getFormationPublicContent().subscribe(response => {
      this.modalContents = response;
    });*/

    this.formationService.getFormationLocationContent().subscribe(response => {
      this.locations = response;
    });
  }

  /*
  showModalDetails(index: number) {

    for (let modalContent of this.modalContents) {
      if (modalContent.index == index) {
        let modal = this.modalCtrl.create(ModalFormationPublicPage, { "modalContent": modalContent });
        modal.present();
      }
    }

  }*/

  openLink(link: string) {
    this.iab.create("http://" + link);
  }

}