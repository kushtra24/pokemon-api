import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../services/pokemon-service/pokemon.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons: any[];

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) {
    this.reset();
  }

  private reset() {
    this.pokemons = [];
  }

  ngOnInit() {
    this.pokemonService.getPokemons()
      .subscribe((pokemon: any) => {
          console.log('pokemon etries => ', pokemon.pokemon_entries);
          this.pokemons = pokemon.pokemon_entries;
        },
        err => {
          throw err;
        });
  }

}
