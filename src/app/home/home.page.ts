import { Component } from '@angular/core';
import {PokeApiService} from '../services/poke-api.service';
import {PokeList} from '../interfaces/poke-list';
import {Pokemon} from '../interfaces/pokemon';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pokemonList: PokeList;
    // SIN TERMINAR
  constructor(private http: PokeApiService) {
    this.getListFromService();
  }

  getListFromService(){
    this.http.getPokemonList().then(
        (res: PokeList) => {
          this.pokemonList = res.results;
          console.log(this.pokemonList);
        },
        (error) => {
          console.error(error);
        }
    );
  }

    goToDescription(url: string) {
        this.http.getPokemonDescription(url).then(
            (res: Pokemon) => {
                this.pokemonList = res.results;
                console.log(this.pokemonList);
            },
            (error) => {
                console.error(error);
            }
        );
    }
}
