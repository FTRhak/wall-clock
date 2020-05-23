import { Injectable } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { hoursListNames, minutesListNames } from './time-text';
import { VoiceService } from './voice.service';
import { WidgetType } from '../models/widget-type.enum';

@Injectable()
export class AppStateService {
  public activeWidget: WidgetType = null;

  private dateTime: Date = new Date();
  private timeTick$: Subscription;

  public get time() {
    return this.dateTime;
  }

  public alarm = {
    active: true,
    hours: 0,
    minutes: 0,

  };
  public annoncer = true;

  constructor(private voice: VoiceService) { }

  startTimer() {
    let prevSecond = this.dateTime.getSeconds();
    let currentSeconds: number;
    let currentMinute: number;
    this.timeTick$ = interval(1000).subscribe(() => {
      this.dateTime = new Date();
      // ---------------------------
      currentMinute = this.dateTime.getMinutes();
      currentSeconds = this.dateTime.getSeconds();
      if (currentMinute === 0 && currentSeconds === 0 && currentSeconds !== prevSecond) {
        this.annonceHour();
      }
      prevSecond = currentSeconds;
      // ---------------------------
    });
  }

  stopTimer() {
    this.timeTick$.unsubscribe();
  }

  annonceTime() {
    const hour = this.dateTime.getHours();
    const hourText = hoursListNames[hour];
    const minutes = this.dateTime.getMinutes();
    const minutesText = minutesListNames(minutes);
    const timeString = `${hourText} година.  ${minutesText}`;
    this.voice.runResponsiveVoice(timeString);
    this.voice.runPlayAudioTime(hour, minutes);
  }

  annonceHour() {
    if (this.annoncer) {
      this.annonceTime();
    }
  }

}
