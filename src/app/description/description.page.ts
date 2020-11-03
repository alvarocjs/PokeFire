import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Pokemon} from '../interfaces/pokemon';

@Component({
  selector: 'app-description',
  templateUrl: './description.page.html',
  styleUrls: ['./description.page.scss'],
})
export class DescriptionPage implements OnInit {
  pokemonDes: Pokemon;
  constructor(private route: Router) {
    // const navigation = this.route.getCurrentNavigation();
    // const state = (this.route.getCurrentNavigation().extras.state as {info: Pokemon});
    // this.pokemonDes = state.info;


    this.pokemonDes = (this.route.getCurrentNavigation().extras.state as {info: Pokemon}).info;
    console.log(this.pokemonDes);
  }

  ngOnInit() {

  }

}
