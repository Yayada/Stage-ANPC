import { Component } from '@angular/core';
import { NavController, ActionSheetController, Platform, } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { PrestationModalServiceProvider } from '../../providers/prestation-modal-service/prestation-modal-service'; 3

import { ModalPrestationAgencePage } from './modals/prestationsAgence/modalPrestationAgence';
import { ModalPortailAnapecPage } from './modals/serviceDistance/portailAnapec';
import { ModalInscriptionAnapecPage } from './modals/serviceDistance/inscriptionAnapec';
import { ModalConseilsInfosPage } from './modals/serviceDistance/conseilsInfos';
import { ModalEmailNewsLetterPage } from './modals/serviceDistance/emailNewsLetter';


@Component({
  selector: 'page-prestations',
  templateUrl: 'prestations.html'
})
export class PrestationsPage {

  prestation: String = "prestationsAgence";
  modalContents: Array<{ index: number, content: {} }> = [];

  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    public modalService: PrestationModalServiceProvider,
    public platform: Platform,
    public iab: InAppBrowser,
    public actionsheetCtrl: ActionSheetController) {

    this.modalService.getContent().subscribe(response => {
      this.modalContents = response;
    });
  }

  showModalDetailsPrestationAgence(index: number) {

    for (let modalContent of this.modalContents) {
      if (modalContent.index == index) {
        let modal = this.modalCtrl.create(ModalPrestationAgencePage, { "modalContent": modalContent });
        modal.present();
      }
    }
  }

  showModalDetailsServiceDistance(index: number) {

    let modal = null;
    switch (index) {

      case 21: modal = this.modalCtrl.create(ModalPortailAnapecPage);
        modal.present();
        break;
      case 22: modal = this.modalCtrl.create(ModalInscriptionAnapecPage);
        modal.present();
        break;
      case 23: modal = this.modalCtrl.create(ModalConseilsInfosPage);
        modal.present();
        break;
      case 24: modal = this.modalCtrl.create(ModalEmailNewsLetterPage);
        modal.present();
        break;
    }
  }

  openMenuSocialNetworks() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Liens',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Slideshare',
          icon: !this.platform.is('ios') ? 'logo-slideshare' : null,
          handler: () => {
            this.iab.create('http://www.slideshare.net/ANAPEC');
          }
        },
        {
          text: 'Facebook',
          icon: !this.platform.is('ios') ? 'logo-facebook' : null,
          handler: () => {
            this.iab.create('https://m.facebook.com/anapec.org');
          }
        },
        {
          text: 'Twitter',
          icon: !this.platform.is('ios') ? 'logo-twitter' : null,
          handler: () => {
            this.iab.create('https://www.twitter.com/anapec');

          }
        },
        {
          text: 'Youtube',
          icon: !this.platform.is('ios') ? 'logo-youtube' : null,
          handler: () => {
            this.iab.create('https://www.youtube.com/anapectv');
          }
        },
        {
          text: 'Viadeo',
          icon: !this.platform.is('ios') ? 'logo-viadeo' : null,
          handler: () => {
            this.iab.create('https://www.viadeo.com/fr/company/anapec');
          }
        },
        {
          text: 'Linkedin',
          icon: !this.platform.is('ios') ? 'logo-linkedin' : null,
          handler: () => {
            this.iab.create('https://www.linkedin.com/company/anapec');
          }
        },
        {
          text: 'Retour',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
        }
      ]
    });
    actionSheet.present();
  }

  openMenuContact() {
    let actionSheet = this.actionsheetCtrl.create({
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'L\'ANAPEC a mis à votre disposition un numéro unique le  05 22 77 64 15',
          icon: !this.platform.is('ios') ? 'phone-portrait' : null,
        },
      ]
    });
    actionSheet.present();
  }

}