import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CheckListComponent } from './check-list/check-list.component';
import { CheckListResultComponent } from './check-list/check-list-result/check-list-result.component';
import {FormsModule} from "@angular/forms";
import {CheckListDataService} from "./check-list/check-list-data.service";
import { ResultGraphComponent } from './check-list/check-list-result/result-graph/result-graph.component';


@NgModule({
  declarations: [
    AppComponent,
    CheckListComponent,
    CheckListResultComponent,
    ResultGraphComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CheckListDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
