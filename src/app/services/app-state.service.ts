import { Injectable } from '@angular/core';
import { Subscription, interval, Subject } from 'rxjs';
import { hoursListNames, minutesListNames } from './time-text';
import { VoiceService } from './voice.service';
import { WidgetType } from '../models/widget-type.enum';
import { StorageService } from './storage.service';
import { StoreTypeData } from '../models/store-type-data.enum';
import { StateEvent } from '../models/state-event';
import { AnnoncerStateModel } from '../models/annoncer-state.model';

@Injectable()
export class AppStateService {
  public stateChangeEvent = new Subject<StateEvent>();

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

  private annoncerModel: AnnoncerStateModel;

  get annoncer() {
    return this.annoncerModel;
  }

  constructor(
    private storage: StorageService,
    private voice: VoiceService
  ) {
    this.annoncerModel = this.storage.get('annoncer', 'object') || new AnnoncerStateModel();

    this.stateChangeEvent.subscribe(ev => {
      switch (ev.type) {
        case StoreTypeData.Annoncer:
          this.annoncerModel.active = ev.value;
          break;
        case StoreTypeData.AnnoncerStart:
          this.annoncerModel.startHours = ev.value;
          break;
        case StoreTypeData.AnnoncerStop:
          this.annoncerModel.stopHours = ev.value;
          break;
        case StoreTypeData.AnnoncerStep:
          this.annoncerModel.step = ev.value;
          break;
      }

      this.updateStore();
    });
  }

  updateStore() {
    this.storage.set('annoncer', this.annoncer, true);
  }

  startTimer() {
    let prevSecond = this.dateTime.getSeconds();
    let currentSeconds: number;
    let currentMinute: number;
    this.timeTick$ = interval(1000).subscribe(() => {
      this.dateTime = new Date();
      // ---------------------------
      currentMinute = this.dateTime.getMinutes();
      currentSeconds = this.dateTime.getSeconds();
      if (currentSeconds === 0 && currentSeconds !== prevSecond) {
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
    // this.voice.runResponsiveVoice(timeString);
    this.voice.runPlayAudioTime(hour, minutes);
  }

  annonceHour() {
    if (this.annoncer) {
      const hour = this.dateTime.getHours();
      const minutes = this.dateTime.getMinutes();
      console.log('---H', hour);
      console.log('startHours', this.annoncerModel.startHours);
      console.log('stopHours', this.annoncerModel.stopHours);
      if ((hour >= this.annoncerModel.startHours && hour <= this.annoncerModel.stopHours) && minutes === 0) {
        this.annonceTime();
      }
    }
  }

}
