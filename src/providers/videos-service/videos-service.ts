import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the VideosServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class VideosServiceProvider {

  constructor(public http: Http) {
  }

  getContent() {

    return this.http.get("assets/data/anapecVideosLinks.json").map(res => res.json());
  }

}
