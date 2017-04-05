import { Pipe } from '@angular/core';

@Pipe({ name: 'filter' })
export class FilterArrayPipe {
  transform(list, args) {
    if (!args) {
      return list;
    } else if (list) {
      return list.filter(item => {
        for (let key in item) {
          let target = item[key];
          if (typeof target === 'number') {
            target = target.toString();
          }
          if ((typeof target === 'string' || target instanceof String) && (target.indexOf(args) !== -1)) {
            return true;
          }
        }
      });
    }
  }
}
