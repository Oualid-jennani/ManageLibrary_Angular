import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../book/model/book.model';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipe implements PipeTransform {
  
  transform(items: Book[], filter: string): any {
    if (!items || !filter) {
        return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter(item => item.name.indexOf(filter) !== -1);
}

}
