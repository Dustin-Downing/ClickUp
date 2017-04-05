import {Http, Response} from '@angular/http';
import {Injectable, Component, Input} from '@angular/core';
import {ColumnComponent} from './column.component';

@Component({
  selector: 'datatable',
  template:  `<div class="container" style="margin-top: 50px">
                <div class="input-group" *ngIf=enableFilter>
                  <span class="input-group-addon" id="basic-addon1">Search for: </span>
                  <input type="text" class="form-control" [(ngModel)]=filterQuery placeholder="Filter" aria-describedby="table-filter" />
                </div>
                <table class="table table-bordered table-hover">
                  <thead style="background-color: #9E9E9E;">
                    <tr>
                      <th *ngFor="let column of columns" (click)="selectOrder(column.value)">
                        <button type="button" class="btn btn-primary">
                          {{column.header}}
                          <i *ngIf="selectedOrder===column.value" class="fa fa-caret-up" aria-hidden="true"></i>
                          <i *ngIf="selectedOrder==='-'+column.value" class="fa fa-caret-down" aria-hidden="true"></i>
                        </button>
                      </th>
                    </tr>
                  </thead>
        	        <tbody *ngFor="let row of dataset | filter:filterQuery | orderBy:selectedOrder">
            	  	  <tr>
            	  	    <td *ngFor="let column of columns">{{row[column.value]}}</td>
        	          </tr>
        	        </tbody>
    	          </table>
              </div>`,
})
export class DatatableComponent {

  @Input() dataset;
  @Input() enableFilter = false;
  columns: ColumnComponent[] = [];
  filterQuery = "";
  selectedOrder = "id";

  addColumn(column){
    this.columns.push(column);
  }

  selectOrder(column){
    this.selectedOrder = ((this.selectedOrder===column) ? "-"+column : column);
  }

}
