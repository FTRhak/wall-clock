import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hourLimit'
})
export class HourLimitPipe implements PipeTransform {

  transform(value: number[], startTime: number): number[] {
    const res = '1'.repeat(24 - startTime).split('').map((el, key) => key + startTime);
    return res;
  }

}
