import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TestParentComponent } from './test-parent/test-parent.component';
import { TestChildComponent } from './test-child/test-child.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    TestParentComponent,
    TestChildComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
