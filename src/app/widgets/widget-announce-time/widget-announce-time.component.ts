import { Component, OnInit } from '@angular/core';
import { AppStateService } from 'src/app/services/app-state.service';
import { StoreTypeData } from 'src/app/models/store-type-data.enum';
import { range } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'widget-announce-time',
  templateUrl: './widget-announce-time.component.html',
  styleUrls: ['./widget-announce-time.component.less']
})
export class WidgetAnnounceTimeComponent implements OnInit {
  public hours = '1'.repeat(24).split('').map((el, key) => key);
  public steps = [60, 30, 15];
  public state: any;
  public startHours: number;
  public stopHours: number;
  public step: number;
  constructor(public appState: AppStateService) { }

  ngOnInit(): void {
    const annoncer = this.appState.annoncer;
    this.state = annoncer.active;
    this.startHours = annoncer.startHours;
    this.stopHours = annoncer.stopHours;
    this.step = annoncer.step;
  }

  onChangeState(ev: any) {
    this.state = ev.target.checked;
    this.appState.stateChangeEvent.next({ type: StoreTypeData.Annoncer, value: this.state });
  }

  changeHourseRange() {
    this.startHours *= 1;
    this.stopHours *= 1;
    if (this.startHours > this.stopHours) {
      this.stopHours = this.startHours;
    }
    this.appState.stateChangeEvent.next({ type: StoreTypeData.AnnoncerStart, value: this.startHours });
    this.appState.stateChangeEvent.next({ type: StoreTypeData.AnnoncerStop, value: this.stopHours });
  }

  onChangeStartHour() {
    this.changeHourseRange();
  }
  onChangeStopHour() {
    this.changeHourseRange();
  }
  onChangeStep() {
    this.appState.stateChangeEvent.next({ type: StoreTypeData.AnnoncerStep, value: this.step });
  }

}
