import {Http, Response} from '@angular/http';
import {Injectable, Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:`<datatable [dataset]=reqData [enableFilter]=true>
              <column *ngFor="let header of headers" [value]="header" [header]="toTitleCase(header)"></column>
            </datatable>`,
})
export class AppComponent {
  reqData;
  headers;

  constructor(private http:Http) {
    // To make this table responds to a different API call, use the line below
    // this.http.get('https://jsonplaceholder.typicode.com/todos')
    this.http.get('data/reqData.json') //switch this line with line above
      .subscribe(res => {
        this.reqData = res.json();
        this.headers = [];
        for(var key in res.json()[0]){
          if(res.json()[0].hasOwnProperty(key)) {
            this.headers.push(key);
          }
        }
      });
  }

  toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
}
