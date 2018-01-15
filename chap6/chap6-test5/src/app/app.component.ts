import {AfterViewInit, Component, DoCheck, ElementRef, ViewChild} from '@angular/core';
declare var jQuery;

@Component({
  selector: 'app-root',
  template: `
    <h2>DoCheck and External Lib</h2>   
    <input type="text" #myInput/>
    <span *ngIf="isChristmas">Wow Christmas!!!</span>
  `
})
export class AppComponent implements AfterViewInit, DoCheck {
  curDate: string = "";
  oldDate: string = "";
  chkCounter: number = 0;
  isChristmas: boolean;
  @ViewChild('myInput') myInput: ElementRef;

  constructor() {
  }

  ngAfterViewInit(): void {
    var x = jQuery(this.myInput.nativeElement);
    console.log(x);
    x.datepicker();
  }

  ngDoCheck(): void {
    this.curDate = this.myInput.nativeElement.value;
    if (this.oldDate !== this.curDate) {
      console.log(`cur date changed: ${this.curDate}`);
      this.oldDate = this.curDate;
      console.log(`chk counter: ${this.chkCounter}`);
      this.checkChristmas();
    }

    this.chkCounter++;
  }

  checkChristmas() {
    const result = this.curDate.match(/12\/25\/[0-9]{4}/);
    this.isChristmas = result && result.length === 1;
  }


}
