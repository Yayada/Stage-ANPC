import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { FaqServiceProvider } from '../../providers/faq-service/faq-service';
import {ModalFaqContentPage} from './modals/faqContentModal';


@Component({
  selector: 'page-faq',
  templateUrl: 'faq.html'
})
export class FaqPage {

  faq: string = "eligibilite";
  faqs: Array<{index : number, title : string , reponse : string}>;

  constructor(public navCtrl: NavController, private faqService: FaqServiceProvider, private modalCtrl : ModalController) {

    faqService.getContent().subscribe(response => {

      this.faqs = response;
    });

  }

  showModalDetails (index: number) {

    for (let faqContent of this.faqs) {
      if (faqContent.index == index) {
        let modal = this.modalCtrl.create(ModalFaqContentPage, { "modalContent": faqContent });
        modal.present();
      }
    }
  }

}