import { Component } from '@angular/core';
import {PokeApiService} from '../services/poke-api.service';
import {PokeList} from '../interfaces/poke-list';
import {Pokemon} from '../interfaces/pokemon';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pokemonList: PokeList;
  pokemon: Pokemon;
    // SIN TERMINAR
  constructor(private http: PokeApiService, private router: Router) {
    this.getListFromService();
  }

  getListFromService(){
    // this.http.getPokemonList().then(
    //     (res: PokeList) => {
    //       this.pokemonList = res.results;
    //     },
    //     (error) => {
    //       console.error(error);
    //     }
    // );

    this.http.getPokemonList2();
  }

  goToDescription(url: string) {
        // this.http.getPokemonDescription(url).then(
        //     (res: Pokemon) => {
        //         this.pokemon = res;
        //         this.router.navigate(['/description'], {state: {info: this.pokemon}});
        //     },
        //     (error) => {
        //         console.error(error);
        //     }
        // );
  }
}
