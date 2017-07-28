import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-modal-acceuil-information',
  templateUrl: 'modalAcceuilInformation.html'
})
export class ModalAcceuilInformationPage {

  content: any;

  constructor(public viewCtrl: ViewController, public params: NavParams) {

    this.content = {
      "index": 11,
      "content": {
        "title": "Acceuil et information en agence",
        "public": "Les chercheurs d’emploi visitant l’agence Anapec à la recherche d’un emploi.",
        "lieu": "Dans une agence Anapec ouverte aux migrants en situation régulière la plus proche de votre lieu de résidence.",
        "duree": null,
        "objectifs": [
          "Assister les chercheurs d’emploi pour l'inscription dans la BDD ou pour la postulation sur une offre d'emploi ",
          "Informer les Chercheurs d’emploi sur les services adéquats selon besoin : les offres d'emploi affichées, les prestations et lesservices de l'agence, et les orienter vers les services et prestations appropriés",
          "Inscrire les Chercheurs d’emploi à une prestation",
          "Assister les Chercheurs d’emploi à l'utilisation du matériel et la documentation disponibles dans l'espace emploi."
        ]
      }
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}