import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { WebReqInterceptor } from './web-req.interceptor';
import { InscriptionComponent } from './Vue/inscription/inscription.component';
import { ConnexionComponent } from './Vue/connexion/connexion.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth.service';
import { AccueilComponent } from './Vue/accueil/accueil.component';
import { GestionComptesComponent } from './Vue/gestion-comptes/gestion-comptes.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './Vue/menu/menu.component';
import { GestionEnseignementsComponent } from './Vue/gestion-enseignements/gestion-enseignements.component';
import { GestionRecapitulatifsComponent } from './Vue/gestion-recapitulatifs/gestion-recapitulatifs.component';
import { GestionReglesCalculComponent } from './Vue/gestion-regles-calcul/gestion-regles-calcul.component';
import { RecapitulatifComponent } from './Vue/recapitulatif/recapitulatif.component';
import { EnseignementsComponent } from './Vue/enseignements/enseignements.component';
import { MonCompteComponent } from './Vue/mon-compte/mon-compte.component';
import { ModifCompteComponent } from './Vue/modif-compte/modif-compte.component';
import { DeconnexionComponent } from './Vue/deconnexion/deconnexion.component';

@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    ConnexionComponent,
    AccueilComponent,
    GestionComptesComponent,
    MenuComponent,
    GestionEnseignementsComponent,
    GestionRecapitulatifsComponent,
    GestionReglesCalculComponent,
    RecapitulatifComponent,
    EnseignementsComponent,
    MonCompteComponent,
    ModifCompteComponent,
    DeconnexionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    //{ provide: HTTP_INTERCEPTORS, useClass: WebReqInterceptor, multi: true }
    AuthService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
