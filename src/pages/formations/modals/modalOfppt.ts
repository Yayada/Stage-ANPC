import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@Component({
  selector: 'page-modal-ofppt',
  templateUrl: 'modalOfppt.html'
})
export class ModalOfpptPage {

  content : any;

  constructor(public viewCtrl: ViewController, public params: NavParams, public iab: InAppBrowser) {

    this.content = {
      "index": 1,
      "content": {
        "title": "OFPPT",
        "public": "Les migrants qui sont à la recherche d’une formation professionnelle",
        "lieu": "Dans un centre relevant de l’OFPPT plus proche de votre lieu de résidence.",
        "objectifs": [
          "Obtenir des informations sur les différentes filières de formation professionnelle",
          "Connaître vos points forts et ceux à améliorer pour un accès rapide à l’emploi",
          "Identifier une formation correspondant à vos objectifs professionnels."
        ],
        "contact": "www.ofppt.ma",
        "tel": "0522634444"
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