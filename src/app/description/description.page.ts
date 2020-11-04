import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Pokemon} from '../interfaces/pokemon';

@Component({
  selector: 'app-description',
  templateUrl: './description.page.html',
  styleUrls: ['./description.page.scss'],
})
export class DescriptionPage implements OnInit {

  pokemonDes: Pokemon;

  constructor(private route: Router) {
    this.pokemonDes = (this.route.getCurrentNavigation().extras.state as {info: Pokemon}).info;
  }

  ngOnInit() {}

}
