import { Component, OnInit } from '@angular/core';
import {PokemonService} from '../services/pokemon-service/pokemon.service';
import {ActivatedRoute, Params} from '@angular/router';
import {takeWhile} from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-show',
  templateUrl: './pokemon-show.component.html',
  styleUrls: ['./pokemon-show.component.css']
})
export class PokemonShowComponent implements OnInit {

  pokemon: any;
  pokemonId: number;
  evolution: [];

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
  ) {
    this.reset();
  }

  private reset() {
    this.pokemon = [];
    this.pokemonId = 0;
    this.evolution = [];
    this.pokemon.sprites = '';
  }

  ngOnInit() {
    this.subscribeToEvents();
  }

  private subscribeToEvents() {
    this.route.params.subscribe(params => {
      this.getPokemonDetails(params.name);
    });
  }

  private getPokemonDetails(id: string) {
    if (!id) { return; }
    this.pokemonService.getPokemonDetails(id)
      .subscribe( (pokemon: any) => {
        this.pokemon = pokemon;
        this.pokemonId = pokemon.id;
        this.pokemonService.getPokemonEvolution(pokemon.id)
          .subscribe((ev: any) => {
            this.evolution = ev;
          });
      }, err => {
        throw err;
      });

  }


}
