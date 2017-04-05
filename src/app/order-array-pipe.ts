import { Pipe } from '@angular/core';

@Pipe({ name: 'orderBy' })
export class ArrayOrderPipe {
  transform(list, args) {
    if(list){
      if(args.charAt(0) === '-'){
        let header = args.substr(1);
        return list.sort((a, b) => {
          if (a[header] > b[header]) {
            return -1;
          } else if (a[header] < b[header]) {
            return 1;
          } else {
            return 0;
          }
        });
      } else {
        return list.sort((a, b) => {
          if (a[args] < b[args]) {
            return -1;
          } else if (a[args] > b[args]) {
            return 1;
          } else {
            return 0;
          }
        });
      }
    }
  }
}

// @Pipe({
//   name: "orderBy"
// })
// export class ArrayOrderPipe {
//   transform(list, args) {
//     if(args.charAt(0) === '-'){
//       // little on top
//       list.sort((a, b) => {
//         return 0;
//       });
//     } else {
//       // big on top
//       list.sort((a, b) => {
//         return 0;
//       });
//     }
//     // list.sort((a, b) => {
      // if (a['city'] < b['city']) {
      //   return -1;
      // } else if (a['city'] > b['city']) {
      //   return 1;
      // } else {
      //   return 0;
      // }
//     // });
//     return list;
//   }
// }
