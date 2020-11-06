import { Pipe, PipeTransform } from '@angular/core';
import {DICT} from './test';

@Pipe({
  name: 'translateAlvaro'
})
export class TranslateAlvaroPipe implements PipeTransform {
  transform(value: string): string {
          if (DICT[value]){
              return DICT[value];
          }
          else {
              return value.toUpperCase();
          }
  }

}
