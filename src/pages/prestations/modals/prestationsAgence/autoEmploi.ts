import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-modal-auto-emploi',
  templateUrl: 'autoEmploi.html'
})
export class ModalAutoEmploiPage {

  content: any;

  constructor(public viewCtrl: ViewController, public params: NavParams) {

    this.content = {
      "index": 15,
      "content": {
        "title": "Auto emploi",
        "public": " L’offre d’accompagnement « Auto Emploi »  est  une offre à la carte, adaptée aux besoins du Porteur du Projet.  Elle est adressée à tout porteur de projet ou d’idée de création d’entreprises (TPE & Activité génératrice de revenu) et basée sur la contractualisation des prestations.",
        "lieu": null,
        "duree": null,
        "objectifs": [
          " Assurer une  orientation entrepreneuriale ",
          " Assurer l’accompagnement des porteurs de projet à l’élaboration de leurs business plan ",
          " Assister les porteurs de projets  dans les formalités de création juridique "
        ],
        "prestationsPorteur": [
          "Information & orientation .",
          "Informations que les différentes formes juridiques.",
          "Prise de RDV au niveau du CRI et constitution dossier de création",
          "Appui au statut Auto Entrepreneur."
        ],
        "prestations": [
          "Atelier d’Informations sur le parcours de création d’entreprises : Durée : 3H",
          "Entretien de contractualisation : Durée : 45 mn",
          "Informations sur les sources de financement ",
          "Accompagnement à la création d’entreprises : Accompagnement personnalisé (ou ateliers collectifs suivis d’entretiens). La durée dépendra de la nature du projet, de la disponibilité du candidat …  ",
          "Assistance du porteur de projet à constituer le dossier de demande de financement",
          "Accompagnement du porteur de projet dans l’accomplissement des formalités administratives"
        ],
        "img": "../../../www/assets/data/img/autoemploi.png"
      }
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}