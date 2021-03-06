import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppStateService } from './services/app-state.service';
import { WidgetType } from './models/widget-type.enum';
import { of } from 'rxjs';
import { mergeMap, switchMap, finalize, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Wall Clock';
  public isRun = false;
  get WTypes() {
    return WidgetType;
  }
  constructor(
    public appState: AppStateService
  ) { }

  ngOnInit() {
    this.appState.startTimer();
  }

  ngOnDestroy() {
    this.appState.updateStore();
    this.appState.stopTimer();
  }

  onClick(target: any) {
    this.isRun = true;
    if (target.requestFullscreen) {
      target.requestFullscreen();
    } else if (target.mozRequestFullScreen) {
      target.mozRequestFullScreen();
    } else if (target.webkitRequestFullscreen) {
      target.webkitRequestFullscreen();
    } else if (target.msRequestFullscreen) {
      target.msRequestFullscreen();
    }
  }
}
