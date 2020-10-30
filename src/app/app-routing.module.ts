import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokemonShowComponent} from './pokemon-show/pokemon-show.component';
import {PokemonListComponent} from './pokemon-list/pokemon-list.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent
  },
  {
    path: 'pokemon/:name',
    component: PokemonShowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
