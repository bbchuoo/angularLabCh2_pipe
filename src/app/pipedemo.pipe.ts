import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipedemo'
})
export class PipedemoPipe implements PipeTransform {

  transform(size: number): string {
    return (size / (1024 * 1024)).toFixed(2) + 'MB';
  }

}
