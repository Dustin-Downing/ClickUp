import { Pipe } from '@angular/core';

@Pipe({ name: 'filter' })
export class FilterArrayPipe {
  transform(list, args) {
    if (!args) {
      return list;
    } else if (list) {
      return list.filter(item => {
        for (let key in item) {
          if ((typeof item[key] === 'string' || item[key] instanceof String) && (item[key].indexOf(args) !== -1)) {
            return true;
          }
        }
      });
    }
  }
}
