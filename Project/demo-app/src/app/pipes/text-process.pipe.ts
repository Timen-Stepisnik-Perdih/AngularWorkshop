import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textProcess'
})
export class TextProcessPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/\s/g, 'SPACE');
  }

}
