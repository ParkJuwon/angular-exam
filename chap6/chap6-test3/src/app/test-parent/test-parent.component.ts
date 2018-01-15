import {Component, ContentChild, OnInit, ViewChild} from '@angular/core';
import {TestChildComponent} from "../test-child/test-child.component";

@Component({
  selector: 'app-test-parent',
  template: `
    <div style="background-color: gray;">
      <h4>In ParentComponent's tpl</h4>
      <ng-content></ng-content>
    </div>
  `
})
export class TestParentComponent {
  @ContentChild(TestChildComponent) childCmp: TestChildComponent;
  @ViewChild(TestChildComponent) childCmp2: TestChildComponent;

  constructor() {
  }

  ngAfterContentInit() {
    if (this.childCmp) {
      console.log('this.childCmp.callMe()');
    } else {
      console.log('[ngAfterCotentInit] not found childCmp');
    }
  }

  ngAfterViewInit() {
    if (this.childCmp2) {
      console.log('this.childCmp2.callMe()');
    } else {
      console.log('[ngAfterViewInit] not found childCmp2');
    }
  }

}
