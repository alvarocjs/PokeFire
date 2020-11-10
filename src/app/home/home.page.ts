import { Component } from '@angular/core';
import {PokeApiService} from '../services/poke-api.service';
import {PokeList} from '../interfaces/poke-list';
import {Pokemon} from '../interfaces/pokemon';
import {Router} from '@angular/router';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pokemonList: PokeList;
  pokemon: Pokemon;

  constructor(private http: PokeApiService, private router: Router, private firebaseX: FirebaseX) {
    this.getListFromService();
    this.firebaseX.getToken().then(token => console.log('TOKEN -->' + token));
    this.firebaseX.onMessageReceived().subscribe(data => console.log('DATA--> ' + data));
  }

  getListFromService(){
    this.http.getPokemonList()
        .then(res => {
          this.pokemonList = JSON.parse(res.data).results;
        });
  }

  goToDescription(url: string) {
    this.http.getPokemonDescription2(url)
        .then(res => {
          this.pokemon = JSON.parse(res.data);
          this.router.navigate(['/description'], {state: {info: this.pokemon}});
        });
  }
}
