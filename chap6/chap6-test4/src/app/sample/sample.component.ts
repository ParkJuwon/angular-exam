import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'sample',
  template: `
    <h4>SampleComponent</h4>
    <p>content: {{exContent}}</p>
  `
})
export class SampleComponent implements OnInit, OnDestroy {
  @Input() exContent: string;

  constructor() {
    alert(`constructor hasBindedcontent? ${this.chkExistence(this.exContent)}`);
  }

  ngOnInit() {
    alert(`ngOnInit hasBindedcontent? ${this.chkExistence(this.exContent)}`);
  }

  ngOnDestroy() {
    alert('will be destoryed....');
  }

  private chkExistence(val) {
    return val !== undefined;
  }

}
