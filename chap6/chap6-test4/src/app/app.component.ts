import { Component } from '@angular/core';
import {TempData} from "./prop-input-bind/prop-input-bind.component";

@Component({
  selector: 'app-root',
  template: `
    <h2>OnChanges</h2>
    myNum: <input type="number" [(ngModel)]="numVal"/>  <br/>
    myStr: <input type="text" [(ngModel)]="strVal"/> <br/>
    temp.id: <input type="number" [(ngModel)]="temp.id"/><br>
    temp.content: <input type="text" [(ngModel)]="temp.content"/><br>
    <prop-input-bind [myNum]="numVal" [myStr]="strVal" [tempData]="temp"></prop-input-bind>
  `
})
export class AppComponent {
  numVal: number;
  strVal: string;
  temp: TempData;

  constructor() {
    this.numVal = 1;
    this.strVal = 'test';
    this.temp = new TempData(10, 'sample data');
  }
}
