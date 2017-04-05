import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { HttpModule }       from '@angular/http';
import { FormsModule }      from '@angular/forms'
import { AppComponent }     from './app.component';
import {DatatableComponent} from './datatable.component';
import {ColumnComponent}    from './column.component';
import {FilterArrayPipe}    from './filter-array-pipe';
import {ArrayOrderPipe}     from './order-array-pipe';


@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent,  DatatableComponent, ColumnComponent, FilterArrayPipe, ArrayOrderPipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
