import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AssociationServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AssociationServiceProvider {

  constructor(public http: Http) {
    
  }

  getContent() {

    return this.http.get("assets/data/associationsContent.json").map(res => res.json());
  }

  getAssociationsSubContent() {

    return this.http.get("assets/data/associationsSubContent.json").map(res => res.json());
  }

}
