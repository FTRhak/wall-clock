import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppStateService } from './services/app-state.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, OnDestroy {
  public isRun = true;
  constructor(private appState: AppStateService) { }

  ngOnInit() {
    this.appState.startTimer();
  }

  ngOnDestroy() {
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
