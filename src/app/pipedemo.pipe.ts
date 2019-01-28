import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipedemo'
})
export class PipedemoPipe implements PipeTransform {

  transform(size: number): string {
    return size + 'MB';
  }

}
