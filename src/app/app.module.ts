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
import { FaqPage } from '../pages/faq/faq';

import { ModalAutoEmploiPage } from '../pages/prestations/modals/prestationsAgence/autoEmploi';
import { ModalEntretienPositionnementPage } from '../pages/prestations/modals/prestationsAgence/entretienPositionnement';
import { ModalAcceuilInformationPage } from '../pages/prestations/modals/prestationsAgence/modalAcceuilInformation';
import { ModalMoiEtMarchePage } from '../pages/prestations/modals/prestationsAgence/moiEtMarche';
import { ModalInformerOffrePage } from '../pages/prestations/modals/prestationsAgence/informerOffreEmploi';
import { ModalRedigerCVPage } from '../pages/prestations/modals/prestationsAgence/redigerCV';
import { ModalRedigerLettrePage } from '../pages/prestations/modals/prestationsAgence/redigerLettre';
import { ModalPreparerEntretienPage } from '../pages/prestations/modals/prestationsAgence/preparerEntretien';

import { ModalPortailAnapecPage } from '../pages/prestations/modals/serviceDistance/portailAnapec';
import { ModalInscriptionAnapecPage } from '../pages/prestations/modals/serviceDistance/inscriptionAnapec';
import { ModalConseilsInfosPage } from '../pages/prestations/modals/serviceDistance/conseilsInfos';
import { ModalEmailNewsLetterPage } from '../pages/prestations/modals/serviceDistance/emailNewsLetter';
import { ModalReseauxContactPage } from '../pages/prestations/modals/serviceDistance/reseauxSociauxContact';

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

import { ModalAssociationsPage } from '../pages/infos/modals/acteursChamps/associations';
import { ModalAssociationsSubPage } from '../pages/infos/modals/acteursChamps/associationsSub';

import { ModalOfpptPage } from '../pages/formations/modals/modalOfppt';
import { ModalEntraidePage } from '../pages/formations/modals/modalEntraide';
import { ModalOdcoPage } from '../pages/formations/modals/modalOdco';

import { ModalFaqContentPage } from '../pages/faq/modals/faqContentModal';

import { StatusBar } from '@ionic-native/status-bar';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { PhotoViewer } from '@ionic-native/photo-viewer';

import { PrestationModalServiceProvider } from '../providers/prestation-modal-service/prestation-modal-service';
import { AssociationServiceProvider } from '../providers/association-service/association-service';
import { FormationProvider } from '../providers/formation-service/formation-service';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { VideosServiceProvider } from '../providers/videos-service/videos-service';
import { FaqServiceProvider } from '../providers/faq-service/faq-service';

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
    FaqPage,
    ModalAcceuilInformationPage,
    ModalAutoEmploiPage,
    ModalEntretienPositionnementPage,
    ModalMoiEtMarchePage,
    ModalInformerOffrePage,
    ModalRedigerCVPage,
    ModalRedigerLettrePage,
    ModalPreparerEntretienPage,
    ModalPortailAnapecPage,
    ModalInscriptionAnapecPage,
    ModalConseilsInfosPage,
    ModalEmailNewsLetterPage,
    ModalReseauxContactPage,
    ModalContratInsertionPage,
    ModalTravailEtrangerPage,
    ModalAutreMigrantsPage,
    ModalMigrantsBeneficiantsPage,
    ModalSitesRecrutementPage,
    ModalCentreRegionauxPage,
    ModalActeursPublicPage,
    ModalSecteursRecrutePage,
    ModalMetiersPorteursPage,
    ModalActeursInstitutionnelsPage,
    ModalAssociationsPage,
    ModalAssociationsSubPage,
    ModalOfpptPage,
    ModalEntraidePage,
    ModalOdcoPage,
    ModalFaqContentPage
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
    FaqPage,
    ModalAcceuilInformationPage,
    ModalAutoEmploiPage,
    ModalEntretienPositionnementPage,
    ModalMoiEtMarchePage,
    ModalInformerOffrePage,
    ModalRedigerCVPage,
    ModalRedigerLettrePage,
    ModalPreparerEntretienPage,
    ModalPortailAnapecPage,
    ModalInscriptionAnapecPage,
    ModalConseilsInfosPage,
    ModalEmailNewsLetterPage,
    ModalReseauxContactPage,
    ModalContratInsertionPage,
    ModalTravailEtrangerPage,
    ModalAutreMigrantsPage,
    ModalMigrantsBeneficiantsPage,
    ModalSitesRecrutementPage,
    ModalCentreRegionauxPage,
    ModalActeursPublicPage,
    ModalSecteursRecrutePage,
    ModalMetiersPorteursPage,
    ModalActeursInstitutionnelsPage,
    ModalAssociationsPage,
    ModalAssociationsSubPage,
    ModalOfpptPage,
    ModalEntraidePage,
    ModalOdcoPage,
    ModalFaqContentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    PrestationModalServiceProvider,
    InAppBrowser,
    PhotoViewer,
    AssociationServiceProvider,
    FormationProvider,
    YoutubeVideoPlayer,
    VideosServiceProvider,
    FaqServiceProvider,

  ]
})
export class AppModule { }
