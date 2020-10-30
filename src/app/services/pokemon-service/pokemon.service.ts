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

}
