import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HTTP} from '@ionic-native/http/ngx';
import {PokeList} from '../interfaces/poke-list';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  pokedexUrl = 'https://pokeapi.co/api/v2/pokemon?limit=21';

  constructor(public http2: HTTP) {}

  // getPokemonList(){
  //   return this.http.get(this.pokedexUrl).toPromise();
  // }
  // getPokemonDescription(urlPoke: string){
  //   return this.http.get(urlPoke).toPromise();
  // }

  getPokemonList2(){
      // this.http2.get(this.pokedexUrl, {}, {})
      //     .then(data => {
      //         //console.log(data.status);
      //         //console.log(data.data); // Información recibida desde el server.
      //         return data.data;
      //         //console.log(data.headers);
      //     });
      return this.http2.get(this.pokedexUrl, {}, {});

  }
  getPokemonDescription2(urlPoke: string){
    return this.http2.get(urlPoke, {}, {});
  }
}
