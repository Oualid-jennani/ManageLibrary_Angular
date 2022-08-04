import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordCountPipe'
})
export class WordCountPipe implements PipeTransform {

  transform(filter: String): any {
    return filter.trim().split(/\s+/).length;
  }

}
