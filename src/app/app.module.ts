import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { WebReqInterceptor } from './web-req.interceptor';
import { InscriptionComponent } from './Vue/inscription/inscription.component';
import { ConnexionComponent } from './Vue/connexion/connexion.component';
import { AjoutEnseignantComponent } from './Vue/ajout-enseignant/ajout-enseignant.component';
import { ModifEnseignantComponent } from './Vue/modif-enseignant/modif-enseignant.component';
import { SupprEnseignantComponent } from './Vue/suppr-enseignant/suppr-enseignant.component';
import { ModifMdpComponent } from './Vue/modif-mdp/modif-mdp.component';
import { InsNonVacatEnsComponent } from './Vue/ins-non-vacat-ens/ins-non-vacat-ens.component';
import { DesinsNonVacatEnsComponent } from './Vue/desins-non-vacat-ens/desins-non-vacat-ens.component';
import { InsEnsParAdminComponent } from './Vue/ins-ens-par-admin/ins-ens-par-admin.component';
import { DesinsEnsParAdminComponent } from './Vue/desins-ens-par-admin/desins-ens-par-admin.component';
import { EditRecapServPourvuComponent } from './Vue/edit-recap-serv-pourvu/edit-recap-serv-pourvu.component';
import { EditRecapServNonPourvuComponent } from './Vue/edit-recap-serv-non-pourvu/edit-recap-serv-non-pourvu.component';
import { SaisieUCComponent } from './Vue/saisie-uc/saisie-uc.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    ConnexionComponent,
    AjoutEnseignantComponent,
    ModifEnseignantComponent,
    SupprEnseignantComponent,
    ModifMdpComponent,
    InsNonVacatEnsComponent,
    DesinsNonVacatEnsComponent,
    InsEnsParAdminComponent,
    DesinsEnsParAdminComponent,
    EditRecapServPourvuComponent,
    EditRecapServNonPourvuComponent,
    SaisieUCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    //{ provide: HTTP_INTERCEPTORS, useClass: WebReqInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
