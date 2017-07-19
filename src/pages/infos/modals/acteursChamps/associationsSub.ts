import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { AssociationServiceProvider } from '../../../../providers/association-service/association-service';

@Component({
  selector: 'page-modal-associations-sub',
  templateUrl: 'associationsSub.html'
})
export class ModalAssociationsSubPage {

  allAssociations: Array<{ shortName: string, name: string, tel: string, mail: string, city: string }> = [];
  associations: Array<{ shortName: string, name: string, tel: string, mail: string, city: string }> = [];
  villeAssociations: Array<{ shortName: string, name: string, tel: string, mail: string, city: string }> = [];
  ville: string;

  constructor(public viewCtrl: ViewController, public associationService: AssociationServiceProvider) {

    this.getContent();
  }

  getContent() {

    this.associationService.getAssociationsSubContent().subscribe(response => {
      this.allAssociations = response;
      this.associations = response;
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  onVilleChange(ville: string) {

    this.associations = this.allAssociations;

    this.villeAssociations.length = 0;

    if (ville == "all") {
      this.associations = this.allAssociations;
    } else {
      for (let association of this.associations) {
        if (association.city == ville) {
          this.villeAssociations.push(association);
        }
      }
      this.associations = this.villeAssociations;

    }
  }

}