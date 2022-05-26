import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InscriptionComponent } from './Vue/inscription/inscription.component';
import { ConnexionComponent } from './Vue/connexion/connexion.component';
import { AccueilComponent } from './Vue/accueil/accueil.component';
import { GestionComptesComponent } from './Vue/gestion-comptes/gestion-comptes.component';
import { GestionEnseignementsComponent } from './Vue/gestion-enseignements/gestion-enseignements.component';
import { GestionRecapitulatifsComponent } from './Vue/gestion-recapitulatifs/gestion-recapitulatifs.component';
import { GestionReglesCalculComponent } from './Vue/gestion-regles-calcul/gestion-regles-calcul.component';
import { RecapitulatifComponent } from './Vue/recapitulatif/recapitulatif.component';
import { EnseignementsComponent } from './Vue/enseignements/enseignements.component';
import { MonCompteComponent } from './Vue/mon-compte/mon-compte.component';
import { ModifCompteComponent } from './Vue/modif-compte/modif-compte.component';
import { EnseignementsParEnseignantComponent } from './Vue/enseignements-par-enseignant/enseignements-par-enseignant.component';
import { EnseignementsEnseignantComponent } from './Vue/enseignements-enseignant/enseignements-enseignant.component';
import { ModifCompteEnseignantComponent } from './Vue/modif-compte-enseignant/modif-compte-enseignant.component';
import { RecapitulatifVueAdminComponent } from './Vue/recapitulatif-vue-admin/recapitulatif-vue-admin.component';
import { InscriptionVueAdminComponent } from './Vue/inscription-vue-admin/inscription-vue-admin.component';
import { EnseignementsVueAdminComponent } from './Vue/enseignements-vue-admin/enseignements-vue-admin.component';
import { EnseignementsParEnseignantVueAdminComponent } from './Vue/enseignements-par-enseignant-vue-admin/enseignements-par-enseignant-vue-admin.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: 'inscription' },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'gestionComptes', component: GestionComptesComponent },
  { path: 'gestionEnseignements', component: GestionEnseignementsComponent },
  { path: 'gestionRecapitulatifs', component: GestionRecapitulatifsComponent },
  { path: 'gestionReglesCalcul', component: GestionReglesCalculComponent },
  { path: 'recapitulatif', component: RecapitulatifComponent },
  { path: 'enseignements', component: EnseignementsComponent },
  { path: 'monCompte', component: MonCompteComponent },
  { path: 'modifCompte', component: ModifCompteComponent },
  { path: 'enseignementsParEnseignant', component: EnseignementsParEnseignantComponent },
  { path: 'enseignementsEnseignant', component: EnseignementsEnseignantComponent },
  { path: 'modifCompteEnseignant', component: ModifCompteEnseignantComponent },
  { path: 'recapitulatifVueAdmin', component: RecapitulatifVueAdminComponent },
  { path: 'inscriptionVueAdmin', component: InscriptionVueAdminComponent },
  { path: 'enseignementsVueAdmin', component: EnseignementsVueAdminComponent },
  { path: 'enseignementsParEnseignantVueAdmin', component: EnseignementsParEnseignantVueAdminComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

