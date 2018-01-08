import {Inject, Injectable} from '@angular/core';
import {LoggerService} from './logger-service';
import {LogLevel} from './log-level.enum';
import {LOG_LEVEL_TOKEN} from './app.token';

@Injectable()
export class AnotherLoggerService extends LoggerService {
  constructor(@Inject(LOG_LEVEL_TOKEN) logLevel: LogLevel) {
    super(logLevel);
  }

  log(logLevel: LogLevel, msg: string) {
    const logMsg = this.getFormattedLogMsg(logLevel, msg);
    if (this.isProperLogLevel(this.logLevel)) {
      console.log(logMsg);
    }
  }

  private getFormattedLogMsg(logLevel: LogLevel, msg: string) {
    return `[${LogLevel[logLevel]}] - ${msg}`;
  }


}
