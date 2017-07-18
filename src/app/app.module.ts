import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PrestationsPage } from '../pages/prestations/prestations';
import { DroitDuTravailPage } from '../pages/droitDuTravail/droitDuTravail';
import { ConseilsPage } from '../pages/conseils/conseils';
import { InfosPage } from '../pages/infos/infos';
import { FormationsPage } from '../pages/formations/formations';
import { OffresEmploiPage } from '../pages/offresEmploi/offresEmploi';
import { AnapecPage } from '../pages/anapec/anapec';
import { VideosPage } from '../pages/videos/videos';

import { ModalPrestationAgencePage } from '../pages/prestations/modals/prestationsAgence/modalPrestationAgence';
import { ModalPortailAnapecPage } from '../pages/prestations/modals/serviceDistance/portailAnapec';
import { ModalInscriptionAnapecPage } from '../pages/prestations/modals/serviceDistance/inscriptionAnapec';
import { ModalConseilsInfosPage } from '../pages/prestations/modals/serviceDistance/conseilsInfos';
import { ModalEmailNewsLetterPage } from '../pages/prestations/modals/serviceDistance/emailNewsLetter';
import { ModalContratInsertionPage } from '../pages/droitDuTravail/modals/formesContrat/contratInsertion';
import { ModalTravailEtrangerPage } from '../pages/droitDuTravail/modals/formesContrat/travailEtranger';
import { ModalAutreMigrantsPage } from '../pages/droitDuTravail/modals/procedureRecrutement/autreMigrants';
import { ModalMigrantsBeneficiantsPage } from '../pages/droitDuTravail/modals/procedureRecrutement/migrantsBeneficiants';
import { ModalSitesRecrutementPage } from '../pages/infos/modals/marcheTravail/sitesRecrutement';
import { ModalCentreRegionauxPage } from '../pages/infos/modals/marcheTravail/centreRegionaux';
import { ModalActeursPublicPage } from '../pages/infos/modals/marcheTravail/acteursPublic';
import { ModalSecteursRecrutePage } from '../pages/infos/modals/secteursMetiers/secteursRecrute';
import { ModalMetiersPorteursPage } from '../pages/infos/modals/secteursMetiers/metiersPorteurs';
import { ModalActeursInstitutionnelsPage } from '../pages/infos/modals/acteursInstitutionnels/acteursInsitutionnels';

import { PrestationModalServiceProvider } from '../providers/prestation-modal-service/prestation-modal-service';

import { StatusBar } from '@ionic-native/status-bar';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PrestationsPage,
    DroitDuTravailPage,
    ConseilsPage,
    InfosPage,
    FormationsPage,
    OffresEmploiPage,
    AnapecPage,
    VideosPage,
    ModalPrestationAgencePage,
    ModalPortailAnapecPage,
    ModalInscriptionAnapecPage,
    ModalConseilsInfosPage,
    ModalEmailNewsLetterPage,
    ModalContratInsertionPage,
    ModalTravailEtrangerPage,
    ModalAutreMigrantsPage,
    ModalMigrantsBeneficiantsPage,
    ModalSitesRecrutementPage,
    ModalCentreRegionauxPage,
    ModalActeursPublicPage,
    ModalSecteursRecrutePage,
    ModalMetiersPorteursPage,
    ModalActeursInstitutionnelsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PrestationsPage,
    DroitDuTravailPage,
    ConseilsPage,
    InfosPage,
    FormationsPage,
    OffresEmploiPage,
    AnapecPage,
    VideosPage,
    ModalPrestationAgencePage,
    ModalPortailAnapecPage,
    ModalInscriptionAnapecPage,
    ModalConseilsInfosPage,
    ModalEmailNewsLetterPage,
    ModalContratInsertionPage,
    ModalTravailEtrangerPage,
    ModalAutreMigrantsPage,
    ModalMigrantsBeneficiantsPage,
    ModalSitesRecrutementPage,
    ModalCentreRegionauxPage,
    ModalActeursPublicPage,
    ModalSecteursRecrutePage,
    ModalMetiersPorteursPage,
    ModalActeursInstitutionnelsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PrestationModalServiceProvider,
    InAppBrowser
  ]
})
export class AppModule {}
