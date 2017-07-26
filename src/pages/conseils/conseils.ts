import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

@Component({
  selector: 'page-conseils',
  templateUrl: 'conseils.html'
})
export class ConseilsPage {

  conseils : string = "elaborerCV";

  constructor(public navCtrl: NavController, private youtube: YoutubeVideoPlayer,) {

  }

  open(videoLink : string) {
    this.youtube.openVideo(videoLink);
  }

}
