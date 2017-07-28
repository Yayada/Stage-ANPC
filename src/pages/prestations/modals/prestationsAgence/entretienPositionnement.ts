import { Component } from '@angular/core';

@Component({
  selector: 'page-modal-entretien-positionnement',
  templateUrl: 'entretienPositionnement.html'
})
export class ModalEntretienPositionnementPage {

  content: any;

  constructor() {

    this.content = {
      "index": 12,
      "content": {
        "title": "Entretien de positionnement",
        "public": "Les chercheurs d’emploi inscrits à l’Anapec qui sont à la recherche d’un emploi",
        "lieu": "Dans une agence Anapec ouverte aux migrants régularisés la plus proche de votre lieu de résidence.",
        "duree": "Entre 30 et 45 min. ",
        "objectifs": [
          " Valider votre inscription à l’Anapec ",
          " Obtenir des informations sur le marché du travail",
          " Identifier un emploi métier correspondant à vos objectifs professionnels ",
          " Organiser et optimiser votre recherche d’emploi grâce à l’élaboration d’un plan d’action personnalisé."
        ]
      }
    }

  }
}