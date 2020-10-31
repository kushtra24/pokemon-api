import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  protected getHeaders() {
    const requestHeaders = new HttpHeaders();
    requestHeaders.set('Content-Type', 'application/json');
    return { headers: requestHeaders };
  }


  /**
   * get the pokemon list
   */
  getPokemons() {
    return this.http.get(environment.urls.pokemonList, this.getHeaders());
  }

  /**
   * get a pokemon details but name
   * @param name string
   */
  getPokemonDetails(name: string) {
    return this.http.get(environment.urls.pokemon + name, this.getHeaders());
  }

  /**
   * get Evolution chain
   * @param id number
   */
  getPokemonEvolution(id: number) {
    return this.http.get('https://pokeapi.co/api/v2/evolution-chain/' + id);
  }

}
