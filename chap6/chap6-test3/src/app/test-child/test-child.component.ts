import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-child',
  template: `
    <h4>In Child Component's tpl</h4>
    <ng-content></ng-content>
  `
})
export class TestChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
