import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../book/model/book.model';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {
  transform(items: Book[], n: number): any {
    if (n != -1 && n != 1) {
        return "erreur";
    }
    else if(n =- 1){
      return items.sort(function(a , b) {
        return b.id - a.id;
     });
    }
    else if(n == 1){
      return items.sort(function(a , b) {
        return b.id + a.id;
     });
  }   
}

}
