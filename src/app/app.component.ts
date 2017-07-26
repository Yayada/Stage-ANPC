import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { DroitDuTravailPage } from '../pages/droitDuTravail/droitDuTravail';
import { ConseilsPage } from '../pages/conseils/conseils';
import { InfosPage } from '../pages/infos/infos';
import { FormationsPage } from '../pages/formations/formations';
import { OffresEmploiPage } from '../pages/offresEmploi/offresEmploi';
import { AnapecPage } from '../pages/anapec/anapec';
import { VideosPage } from '../pages/videos/videos';
import { PrestationsPage } from '../pages/prestations/prestations';
import { FaqPage } from '../pages/faq/faq';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, icon: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Prestations', icon: "list-box", component: PrestationsPage },
      { title: 'Droit du travail', icon: "filing", component: DroitDuTravailPage },
      { title: 'Conseils', icon: "bulb", component: ConseilsPage },
      { title: 'Infos', icon: "information-circle", component: InfosPage },
      { title: 'Formations', icon: "clipboard", component: FormationsPage },
      { title: 'Offres d\'emploi', icon: "briefcase", component: OffresEmploiPage },
      { title: 'Anapec', icon: "icon-anapec", component: AnapecPage },
      { title: 'Vidéos', icon: "videocam", component: VideosPage },
      { title: 'FAQ', icon: "help", component: FaqPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
