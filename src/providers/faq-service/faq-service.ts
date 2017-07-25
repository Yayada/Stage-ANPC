import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the FaqServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FaqServiceProvider {

  constructor(public http: Http) {
  }

    getContent() {

    return this.http.get("assets/data/faqContent.json").map(res => res.json());
  }

}
