import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bienvenue',
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
