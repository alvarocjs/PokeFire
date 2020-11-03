import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  pokedexUrl = 'https://pokeapi.co/api/v2/pokemon?limit=21';
  constructor(public http: HttpClient) {}

  getPokemonList(){
    return this.http.get(this.pokedexUrl).toPromise();
  }
  getPokemonDescription(urlPoke: string){
    return this.http.get(urlPoke).toPromise();
  }
}
