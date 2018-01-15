import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="background-color: yellow">
      <h4>In AppComponent's tpl</h4>
      <app-test-parent>
        <div style="background-color: red">
          <h4>In AppComponent's content projected tpl</h4>
        </div>
        <app-test-child></app-test-child>
      </app-test-parent>
    </div>
  `
})
export class AppComponent {
  constructor() {}
}
