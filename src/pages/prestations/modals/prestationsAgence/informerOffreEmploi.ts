import { Component } from '@angular/core';

@Component({
  selector: 'page-modal-informer-offre',
  templateUrl: 'informerOffreEmploi.html'
})
export class ModalInformerOffrePage {

  content: any;

  constructor() {

    this.content =  {
        "index": 132,
        "content": {
            "title" : "S'informer sur l'offre d'emploi",
            "public": "Tout chercheur d’emploi inscrit dans la base de données de l'ANAPEC présélectionné dans le cadre d’une offre d’emploi recueillie et traitée par l’ANAPEC afin de mieux connaitre les informations sur l’offre (l’entreprise, le poste, les conditions de travail…) et mieux se préparer pour mener à bien l’entretien d’embauche et de s’auto évaluer après",
            "lieu": "Dans une agence Anapec ouverte aux migrants régularisés la plus proche de votre lieu de résidence.",
            "duree": "2 h 30 min. ",
            "objectifs": [
                " Avoir plus d’information sur l’offre d’emploi ",
                " Adapter le CV du candidat à l’offre",
                " Connaitre le (ou les) type(s) d’entretien d’embauche convenu(s) avec l’entreprise ",
                " Connaitre et analyser, les étapes d’un entretien d’embauche",
                " Apprendre comment répondre aux objections de l’employeur lors d’un entretien d’embauche ",
                " Connaître comment s’autoévaluer après l’entretien d’embauche"
            ]
        }
    }
  }

}