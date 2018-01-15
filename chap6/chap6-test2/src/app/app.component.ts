import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <input type="text" id="n-1" #keyInput (keyup)="leaveKeyLog($event, keyInput.value)"/>
      <div>INPUT[id="{{keyInput.id}}"] your current input : {{keyInput.value}}</div>
      <div>INPUT[id="{{keyInput.id}}"] all inputs : {{logs | json}}</div>
    </div>
    <div>
      more attributes of INPUT[id="{{keyInput.id}}"]<br/>
      type: {{keyInput.type}} <br/>
      isRequired: {{keyInput.required}} <br/>
      isDisabled: {{keyInput.disabled}} <br/>
    </div>
  `
})
export class AppComponent {
  logs: number[];

  constructor() {
    this.logs = [];
  }

  leaveKeyLog(evt, num: number) {
    if (evt.keyCode === 13) {
      this.logs.push(num);
      evt.target.value = '';
    }
  }
}
