import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string, limit: number, isIt: boolean): string {
    if (isIt){
      return value.substring(0, limit);
    }
    else{
      return value.split('').reverse().join('');
    }
  }

}
