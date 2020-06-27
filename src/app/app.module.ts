import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ErrorHandler } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';

import { AppComponent } from './app.component';
import { PanelClockComponent } from './components/panel-clock/panel-clock.component';
import { PanelAsistentComponent } from './components/panel-asistent/panel-asistent.component';
import { AppStateService } from './services/app-state.service';
import { VoiceService } from './services/voice.service';
import { FormsModule } from '@angular/forms';
import { RadioService } from './services/radio.service';
import { ErrorHandlerService } from './services/error-handler.service';
import { PanelStatusComponent } from './components/panel-status/panel-status.component';
import { WidgetRadioComponent } from './widgets/widget-radio/widget-radio.component';
import { WidgetAlarmComponent } from './widgets/widget-alarm/widget-alarm.component';
import { ToggleFunctionDirective } from './directives/toggle-function.directive';
import { WidgetAnnounceTimeComponent } from './widgets/widget-announce-time/widget-announce-time.component';
import { WidgetWeatherComponent } from './widgets/widget-weather/widget-weather.component';
import { PanelStatesComponent } from './components/panel-states/panel-states.component';
import { HourLimitPipe } from './widgets/widget-announce-time/hour-limit.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PanelClockComponent,
    PanelAsistentComponent,
    PanelStatusComponent,
    WidgetRadioComponent,
    WidgetAlarmComponent,
    ToggleFunctionDirective,
    WidgetAnnounceTimeComponent,
    WidgetWeatherComponent,
    PanelStatesComponent,
    HourLimitPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    // { provide: ErrorHandler, useClass: ErrorHandlerService },
    AppStateService,
    VoiceService,
    RadioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
