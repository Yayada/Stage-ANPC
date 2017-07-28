import { Component } from '@angular/core';
//import { ViewController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@Component({
  selector: 'page-modal-odco',
  templateUrl: 'modalOdco.html'
})
export class ModalOdcoPage {

  content: any;

  constructor(/*public viewCtrl: ViewController, public params: NavParams,*/ public iab: InAppBrowser) {
    
    this.content = {
      "index": 3,
      "content": {
        "title": "ODCO",
        "actions": [
          "Accompagner les coopératives créées entre migrants dans les domaines de la formation, de la gestion",
          "la législation coopérative, la comptabilité et la commercialisation",
          "Participer aux campagnes de vulgarisation et de formation au profit des coopératives crééesentre migrants",
          "S’assurer que les coopératives créées entre migrants sont gérées conformément à la législation en vigueur",
          "Centraliser et diffusion de la documentation, de l’information relative à la coopération en  liaison avec les migrants",
          "Organiser et participer aux rencontres, études, tables rondes, foires et séminaires en liaison avec les migrants en situation administrative régulière",
          "Assister les migrants porteurs de projets et désirant s’organiser en coopératives :  appui juridique, élaboration des statuts et des dossiers de constitution des coopératives…",
          "Promouvoir les coopératives créées entre migrants par des opérations de diagnostics",
          "Aider les coopératives créées entre migrants à leur structuration au niveau local,  régional et national",
          "Aider à la commercialisation des produits et services des coopératives crées entre migrants à travers des foires"
        ]
      }
    };
    //this.content = params.get('modalContent');
  }
  /*
  dismiss() {
    this.viewCtrl.dismiss();
  }*/

  openLink(link: string) {
    this.iab.create("http://" + link);
  }

}