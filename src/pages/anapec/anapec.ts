import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

@Component({
  selector: 'page-anapec',
  templateUrl: 'anapec.html'
})
export class AnapecPage {

  anapec: string = "anapec";
  constructor(public navCtrl: NavController, private youtube: YoutubeVideoPlayer) {

  }

  open(videoLink: string) {
    this.youtube.openVideo(videoLink);
  }

}