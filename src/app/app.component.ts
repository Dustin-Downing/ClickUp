import {Http, Response} from '@angular/http';
import {Injectable, Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:`<datatable [dataset]=reqData [enableFilter]=true>
              <column [value]="'id'" [header]="'Id'"></column>
              <column [value]="'model'" [header]="'Model'"></column>
              <column [value]="'make'" [header]="'Make'"></column>
              <column [value]="'year'" [header]="'Year'"></column>
              <column [value]="'price'" [header]="'Price'"></column>
            </datatable>`,
})
export class AppComponent {
    reqData;

    constructor(private http:Http) {
        this.http.get('data/reqData.json')
          .subscribe(res => this.reqData = res.json());
    }
}
