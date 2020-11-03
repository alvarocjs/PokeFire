import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PokeList} from '../../interfaces/poke-list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input()
  array: PokeList;

  @Output()
  dUrl = new EventEmitter<string>();

  constructor() {

  }

  ngOnInit() {}

  sendUrl(url: string){
    this.dUrl.emit(url);
  }
}
