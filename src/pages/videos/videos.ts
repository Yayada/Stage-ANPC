import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { VideosServiceProvider } from '../../providers/videos-service/videos-service';

@Component({
  selector: 'page-videos',
  templateUrl: 'videos.html'
})
export class VideosPage {

  videos: Array<{}>;

  constructor(public navCtrl: NavController, private youtube: YoutubeVideoPlayer, private videosService : VideosServiceProvider) {

    videosService.getContent().subscribe(response =>{

      this.videos = response;
    }); 

  }

  open(videoLink : string) {
    this.youtube.openVideo(videoLink);
  }

}