import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'prettyJson'})
export class PrettyJsonPipe implements PipeTransform {
  transform(value: any, ...args): any {
    return `<pre>${JSON.stringify(value, null, 2)
      .replace(/\n/g, '</p><p>')}</pre>`;
  }
}
