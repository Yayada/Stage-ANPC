import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { ModalFormationPublicPage } from './modals/modalFormationPublic';

import { FormationPublicModalProvider } from '../../providers/formation-public-modal/formation-public-modal';

@Component({
  selector: 'page-formations',
  templateUrl: 'formations.html'
})
export class FormationsPage {

  formations: String = "trouverFormation";
  modalContents: Array<{ index: number, content: {} }> = [];

  constructor(public navCtrl: NavController, public modalService: FormationPublicModalProvider, public modalCtrl: ModalController, public iab: InAppBrowser) {

    this.modalService.getContent().subscribe(response => {
      this.modalContents = response;
    });
  }

  showModalDetails(index: number) {

    for (let modalContent of this.modalContents) {
      if (modalContent.index == index) {
        let modal = this.modalCtrl.create(ModalFormationPublicPage, { "modalContent": modalContent });
        modal.present();
      }
    }
  }

  openLink(link: string) {
    this.iab.create("http://" + link);
  }

}