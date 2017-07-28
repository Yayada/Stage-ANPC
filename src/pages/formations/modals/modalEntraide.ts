import { Component } from '@angular/core';
//import { ViewController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@Component({
  selector: 'page-modal-entraide',
  templateUrl: 'modalEntraide.html'
})
export class ModalEntraidePage {

  content: any;

  constructor(/*public viewCtrl: ViewController, public params: NavParams,*/ public iab: InAppBrowser) {
    
    this.content = {
      "index": 2,
      "content": {
        "title": "Entraide nationale",
        "public": "Les migrants qui sont à la recherche d’une formation professionnelle et/ou d’un accompagnement social",
        "lieu": "Dans un centre relevant de l’Entraide Nationale plus proche de votre lieu de résidence.",
        "objectifs": [
          "Obtenir des informations sur les différentes filières de formation professionnelle",
          "Bénéficier d’un accompagnement social, le cas échéant",
          "Connaître vos points forts et ceux à améliorer pour un accès rapide à l’emploi ",
          "Identifier une formation correspondant à vos objectifs professionnels"
        ],
        "contact": "www.entraide.ma ",
        "tel": "0537705150"
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