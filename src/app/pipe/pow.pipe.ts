import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pow'
})
export class PowPipe implements PipeTransform {

  transform(n: number , p: number = 1): any {
    return Math.pow(n, p);;
}

}
