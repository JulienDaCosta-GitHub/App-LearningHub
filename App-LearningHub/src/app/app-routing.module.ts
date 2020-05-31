import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ajout-form',
    pathMatch: 'full'
  },
  {
    path: 'bienvenue',
    loadChildren: () => import('./bienvenue/bienvenue.module').then( m => m.BienvenuePageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'modifier-profil',
    loadChildren: () => import('./modifier-profil/modifier-profil.module').then( m => m.ModifierProfilPageModule)
  },
  {
    path: 'modifier-mail',
    loadChildren: () => import('./modifier-mail/modifier-mail.module').then( m => m.ModifierMailPageModule)
  },
  {
    path: 'modifier-mdp',
    loadChildren: () => import('./modifier-mdp/modifier-mdp.module').then( m => m.ModifierMdpPageModule)
  },
  {
    path: 'modifier-prenom',
    loadChildren: () => import('./modifier-prenom/modifier-prenom.module').then( m => m.ModifierPrenomPageModule)
  },
  {
    path: 'modifier-nom',
    loadChildren: () => import('./modifier-nom/modifier-nom.module').then( m => m.ModifierNomPageModule)
  },
  {
    path: 'matieres',
    loadChildren: () => import('./matieres/matieres.module').then( m => m.MatieresPageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'cours-anim',
    loadChildren: () => import('./3D/cours-anim/cours-anim.module').then(m => m.CoursAnimPageModule)
  },
  {
    path: 'projets-anim',
    loadChildren: () => import('./3D/projets-anim/projets-anim.module').then(m => m.ProjetsAnimPageModule)
  },
  {
    path: 'cours-crea',
    loadChildren: () => import('./Crea/cours-crea/cours-crea.module').then(m => m.CoursCreaPageModule)
  },
  {
    path: 'projets-crea',
    loadChildren: () => import('./Crea/projets-crea/projets-crea.module').then(m => m.ProjetsCreaPageModule)
  },
  {
    path: 'cours-comd',
    loadChildren: () => import('./ComD/cours-comd/cours-comd.module').then(m => m.CoursComdPageModule)
  },
  {
    path: 'projets-comd',
    loadChildren: () => import('./ComD/projets-comd/projets-comd.module').then(m => m.ProjetsComdPageModule)
  },
  {
    path: 'cours-dev',
    loadChildren: () => import('./Dev/cours-dev/cours-dev.module').then(m => m.CoursDevPageModule)
  },
  {
    path: 'projets-dev',
    loadChildren: () => import('./Dev/projets-dev/projets-dev.module').then(m => m.ProjetsDevPageModule)
  },
  {
    path: 'cours-jv',
    loadChildren: () => import('./Jv/cours-jv/cours-jv.module').then(m => m.CoursJvPageModule)
  },
  {
    path: 'projets-jv',
    loadChildren: () => import('./Jv/projets-jv/projets-jv.module').then(m => m.ProjetsJvPageModule)
  },
  {
    path: 'recherche',
    loadChildren: () => import('./recherche/recherche.module').then( m => m.RecherchePageModule)
  },
  {
    path: 'ajout',
    loadChildren: () => import('./ajout/ajout.module').then( m => m.AjoutPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesPageModule)
  },

  {
    path: 'validation',
    loadChildren: () => import('./validation/validation.module').then( m => m.ValidationPageModule)
  },
  {
    path: 'categorie-details',
    loadChildren: () => import('./categorie-details/categorie-details.module').then( m => m.CategorieDetailsPageModule)
  },
  {
    path: 'categorie-details/:id',
    loadChildren: () => import('./categorie-details/categorie-details.module').then( m => m.CategorieDetailsPageModule)
  },
  {
    path: 'ajout-form',
    loadChildren: () => import('./ajout-form/ajout-form.module').then( m => m.AjoutFormPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
