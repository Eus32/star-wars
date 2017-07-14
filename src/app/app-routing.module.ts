import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { PageNotFoundComponent } from './components/page-not-found.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'characters', component: CharactersListComponent },
      { path: '', redirectTo: '/characters', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ])
  ],

  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
