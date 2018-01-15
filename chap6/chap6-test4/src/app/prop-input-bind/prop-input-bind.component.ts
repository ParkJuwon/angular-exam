import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'prop-input-bind',
  template: `
    <h4>PropInputBindComponent</h4>
    <p>myNum: {{myNum}}</p>
    <p>myStr: {{myStr}}</p>
    <p>tempData.content</p>
  `
})
export class PropInputBindComponent implements OnChanges {
  @Input() myNum: number;
  @Input() myStr: string;
  @Input() tempData: TempData;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.myNum && !changes.myNum.isFirstChange()) {
      // external API call or more preprocessing
    }

    for(let propName in changes) {
      let change = changes[propName];
      if(change.isFirstChange()) {
        console.log(`first change: ${propName}`);
      } else {
        console.log(`prev: ${change.previousValue}, cur: ${change.currentValue}`);
      }
    }
  }

}

export class TempData {
  id: number;
  content: string;
  subData: SubObj;

  constructor(_id: number, _content: string) {
    this.id = _id;
    this.content = _content;
    this.subData = new SubObj(this.id + 100, 'data...');
  }
}

export class SubObj {
  data1: number;
  data2: string;

  constructor(d1: number, d2: string) {
    this.data1 = d1;
    this.data2 = d2;
  }
}
