import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })
export class FilterArrayPipe implements PipeTransform {
  transform(list, args) {
    if (!args) {
      return list;
    } else if (list) {
      return list.filter(item => {
        for (let key in item) {
          if (typeof item[key] === 'number') {
            item[key] = item[key].toString();
          }
          if ((typeof item[key] === 'string') && (item[key].toLowerCase().indexOf(args.toLowerCase()) !== -1)) {
            return true;
          }
        }
      });
    }
  }
}
