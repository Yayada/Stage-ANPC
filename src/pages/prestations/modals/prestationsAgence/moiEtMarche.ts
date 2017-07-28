import { Component } from '@angular/core';

@Component({
  selector: 'page-modal-moi-marche',
  templateUrl: 'moiEtMarche.html'
})
export class ModalMoiEtMarchePage {

  content: any;

  constructor() {

    this.content = {
      "index": 131,
      "content": {
        "title": "Moi et le marché du travail",
        "public": "Les chercheurs d’emploi inscrits à l’Anapec qui sont à la recherche d’un emploi",
        "lieu": "Dans une agence Anapec ouverte aux migrants régularisés la plus proche de votre lieu de résidence.",
        "duree": "3h",
        "objectifs": [
          " Connaitre leurs forces et faiblesses ",
          " Connaitre le marché du travail, le rôle de l’Anapec et son positionnement dans ce marché ",
          " Être informé sur les secteurs porteurs ",
          " Être informé sur les emplois les plus demandés",
          " Connaitre les sources d’information disponibles sur le site web Anapec : Rubrique Conseils et infos / m’informe ",
          " Connaitre le rôle de l’Anapec, ses services et ses prestations ",
          " Organiser sa recherche d’emploi et établir les actions à mener ",
          " S’outiller pour améliorer efficacement ses démarches",
          " Visiter l’agence pour connaitre les différents espaces emploi notamment l’espace Appui aux immigrés en situation régulière",
          " Inscription des non-inscrits"
        ]
      }
    }
  }
}