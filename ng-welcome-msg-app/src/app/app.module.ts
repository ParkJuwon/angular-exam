import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {WelcomeMsgComponent} from './welcome-msg/welcome-msg.component';
import {LangSelectorComponent} from './lang-selector/lang-selector.component';
import {FormsModule, COMPOSITION_BUFFER_MODE} from '@angular/forms';
import {I18nSupportService} from './i18n-support.service';
import {LangSelectorBtnPipe} from './lang-selector/lang-selector-btn.pipe';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule, MatSnackBarModule, MatCardModule, MatInputModule, MatRadioModule, MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeMsgComponent,
    LangSelectorComponent,
    LangSelectorBtnPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule, MatSnackBarModule, MatCardModule, MatInputModule, MatRadioModule, MatButtonModule
  ],
  providers: [{provide: COMPOSITION_BUFFER_MODE, useValue: false}, I18nSupportService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
