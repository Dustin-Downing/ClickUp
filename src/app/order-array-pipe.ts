import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'orderBy' })
export class ArrayOrderPipe implements PipeTransform {
  transform(list, arg1, arg2) {
    if(list){
      if(arg1[0] === '-'){
        return list.sort((a, b) => {
          if (a[arg2] > b[arg2]) {
            return -1;
          } else if (a[arg2] < b[arg2]) {
            return 1;
          } else {
            return 0;
          }
        });
      } else {
        return list.sort((a, b) => {
          if (a[arg2] < b[arg2]) {
            return -1;
          } else if (a[arg2] > b[arg2]) {
            return 1;
          } else {
            return 0;
          }
        });
      }
    }
  }
}
