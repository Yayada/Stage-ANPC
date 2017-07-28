import { Component } from '@angular/core';

@Component({
  selector: 'page-modal-rediger-cv',
  templateUrl: 'redigerCV.html'
})
export class ModalRedigerCVPage {

  content: any;

  constructor() {

    this.content = {
      "index": 141,
      "content": {
        "title": "Rédiger son CV",
        "public": "Tout chercheur d’emploi inscrit dans la base de données de l'ANAPEC ayant manifesté un intérêt à l'accueil ou à l'occasion de l'entretien de positionnement pour savoir comment rédiger son CV et le rendre plus attractif.",
        "lieu": "Dans une agence Anapec ouverte aux migrants régularisés la plus proche de votre lieu de résidence.",
        "duree": "3h",
        "objectifs": [
          " Assimiler les différents niveaux de lecture des CV en se mettant en situation de recruteur. ",
          " Repérer les points forts et les points à améliorer d’un CV.",
          " Connaître les différents types et familles de CV.",
          " Construire votre propre CV."
        ]
      }
    }
  }

}