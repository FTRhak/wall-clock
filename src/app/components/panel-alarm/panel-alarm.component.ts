import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { AppStateService } from 'src/app/services/app-state.service';

@Component({
  selector: 'panel-alarm',
  templateUrl: './panel-alarm.component.html',
  styleUrls: ['./panel-alarm.component.less']
})
export class PanelAlarmComponent implements OnInit, OnDestroy {
  public edit = false;
  public hoursList = [];
  public minutesList = [];
  public alarmHour = 0;
  constructor(public state: AppStateService) {
    this.hoursList = [];
    for (let i = 0; i < 24; i++) {
      this.hoursList.push({ label: (i < 10 ? '0' : '') + i, value: i });
    }
    this.minutesList = [];
    for (let i = 0; i < 12; i++) {
      const minutes = i * 5;
      this.minutesList.push({ label: (minutes < 10 ? '0' : '') + minutes, value: minutes });
    }
  }

  ngOnInit() { }

  ngOnDestroy() { }

  arrayRepeat(n: number): number[] {
    return [...Array(n).keys()];
  }

  onEditAlarm() {
    this.edit = !this.edit;
  }
}
