import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { AppStateService } from 'src/app/services/app-state.service';
import { WidgetType } from 'src/app/models/widget-type.enum';

@Component({
  selector: 'panel-alarm',
  templateUrl: './panel-alarm.component.html',
  styleUrls: ['./panel-alarm.component.less']
})
export class PanelAlarmComponent implements OnInit, OnDestroy {
  get active() {
    return this.state.activeWidget === WidgetType.Alarm;
  }
  constructor(public state: AppStateService) { }

  ngOnInit() { }

  ngOnDestroy() { }

  arrayRepeat(n: number): number[] {
    return [...Array(n).keys()];
  }

  onToggleAlarm() {
    if (this.state.activeWidget === WidgetType.Alarm) {
      this.state.activeWidget = null;
    } else {
      this.state.activeWidget = WidgetType.Alarm;
    }
  }
}
