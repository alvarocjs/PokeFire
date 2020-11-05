import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'translateAlvaro'
})
export class TranslateAlvaroPipe implements PipeTransform {

  // miDiccionario = 'src/app/Pipes/dictionary.json';

  transform(value: string, args?: any): string {
    // return null;
    if (args == null){
      switch (value) {
        case 'Altura': return 'height';
      }
    }
    else {
      return 'bobo';
    }
  }

}
