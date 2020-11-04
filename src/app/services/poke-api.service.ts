import { Injectable } from '@angular/core';
import {HTTP} from '@ionic-native/http/ngx';


@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private pokedexUrl = 'https://pokeapi.co/api/v2/pokemon?limit=21';

  constructor(public http: HTTP) {}

  getPokemonList(){
      return this.http.get(this.pokedexUrl, {}, {});
  }
  getPokemonDescription2(urlPoke: string){
    return this.http.get(urlPoke, {}, {});
  }
}
