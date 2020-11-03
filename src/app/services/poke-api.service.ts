import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HTTP} from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  pokedexUrl = 'https://pokeapi.co/api/v2/pokemon?limit=21';

  aux: any;
  constructor(public http2: HTTP) {}

  // getPokemonList(){
  //   return this.http.get(this.pokedexUrl).toPromise();
  // }
  // getPokemonDescription(urlPoke: string){
  //   return this.http.get(urlPoke).toPromise();
  // }

  getPokemonList2(){
    // this.http2.get(this.pokedexUrl, {}, {}).then(
    //     (res: any) => {
    //       this.aux = res;
    //       return this.aux;
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    // );
      this.http2.get(this.pokedexUrl, {}, {})
          .then(data => {
                this.aux = data.data;
          })
          .catch(error => {
              // console.log(error.status);
              // console.log(error.error); // Mensaje de error en una cadena.
              // console.log(error.headers);
          });
      return this.aux;
  }
}
