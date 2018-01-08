import {Component, OnInit, Input, Host, Optional} from '@angular/core';
import {LogLevel} from '../log-level.enum';
import {MySpecialLoggerService} from '../my-special-logger.service';
import {LOG_LEVEL_TOKEN} from '../app.token';
import {LoggerService} from '../logger-service';
import {AnotherLoggerService} from '../another-logger.service';

@Component({
  selector: 'mpl-mouse-track-zone',
  templateUrl: './mouse-track-zone.component.html',
  styleUrls: ['./mouse-track-zone.component.css'],
  // providers: [MySpecialLoggerService, {provide: LOG_LEVEL_TOKEN, useValue: LogLevel.DEBUG}]
})
export class MouseTrackZoneComponent implements OnInit {
  // @Input() private logger: MySpecialLoggerService;
  // logLevel: LogLevel = LogLevel.INFO;
  // logger: MySpecialLoggerService;

  logger: LoggerService;

  constructor(// private logger: MySpecialLoggerService
              @Host() @Optional() mySpecialLogger: MySpecialLoggerService,
              anotherLogger: AnotherLoggerService) {
    this.logger = mySpecialLogger ? mySpecialLogger : anotherLogger;
    // this.logger = new MySpecialLoggerService(this.logLevel);
  }

  ngOnInit() {
  }

  captureMousePos($event) {
    this.logger.debug('click event occured');
    const pos = [$event.clientX, $event.clientY];
    this.logger.info(`x:${pos[0]}, y:${pos[1]}`);
  }
}
