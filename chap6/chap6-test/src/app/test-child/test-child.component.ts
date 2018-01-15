import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'test-child',
  template: `
    <label>check me</label><input type="checkbox" [(ngModel)]="isChecked">
  `
  // styleUrls: ['./test-child.component.css']
})
export class TestChildComponent {
  // myOpenState: string = 'let it be';
  // private _internalState: string = 'not authroized';

  isChecked: boolean;

  constructor() {
    this.isChecked = false;
  }

  // foo() {
  //   console.log('foo');
  // }
  //
  // private bar() {
  //   console.log('bar');
  // }


}
