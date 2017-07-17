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


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Prestations', component: PrestationsPage },
      { title: 'Droit du travail', component: DroitDuTravailPage },
      { title: 'Conseils', component: ConseilsPage },
      { title: 'Infos', component: InfosPage },
      { title: 'Formations', component: FormationsPage },
      { title: 'Offres d\'emploi', component: OffresEmploiPage },
      { title: 'Anapec', component: AnapecPage },
      { title: 'Vidéos', component: VideosPage },
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
