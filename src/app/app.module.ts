import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';

import { AppComponent } from './app.component';
import { PanelClockComponent } from './components/panel-clock/panel-clock.component';
import { PanelAlarmComponent } from './components/panel-alarm/panel-alarm.component';
import { PanelAsistentComponent } from './components/panel-asistent/panel-asistent.component';
import { PanelAnnounceTimeComponent } from './components/panel-announce-time/panel-announce-time.component';
import { AppStateService } from './services/app-state.service';
import { VoiceService } from './services/voice.service';
import { FormsModule } from '@angular/forms';
import { PanelRadioComponent } from './components/panel-radio/panel-radio.component';
import { RadioService } from './services/radio.service';

@NgModule({
  declarations: [
    AppComponent,
    PanelClockComponent,
    PanelAlarmComponent,
    PanelAsistentComponent,
    PanelAnnounceTimeComponent,
    PanelRadioComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DropdownModule,
    DialogModule,
    FormsModule
  ],
  providers: [AppStateService, VoiceService, RadioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
