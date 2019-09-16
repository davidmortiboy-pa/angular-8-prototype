import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'prettyJson'})
export class PrettyJsonPipe implements PipeTransform {
  transform(value: any, ...args): any {
    return `<pre>${JSON.stringify(value, null, 2)
      .replace(/("[a-zA-Z]+"):/g, '<span class="jsProp">$1</span>:')
      .replace(/("[^"]+")([,\n])/g, '<span class="jsVal">$1</span>$2')
      }</pre>`;
  }
}
