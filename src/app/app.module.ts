import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTableComponent } from './data-table/data-table.component';

import { DataTablesModule } from 'angular-datatables';
import {HttpClientModule} from "@angular/common/http";
import { DataTableAllComponent } from './data-table-all/data-table-all.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    DataTableAllComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    DataTablesModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
