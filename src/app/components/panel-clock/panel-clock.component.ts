import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { AppStateService } from 'src/app/services/app-state.service';

@Component({
  selector: 'panel-clock',
  templateUrl: './panel-clock.component.html',
  styleUrls: ['./panel-clock.component.less']
})
export class PanelClockComponent implements OnInit, OnDestroy {
  @Input() dateTime: Date = new Date();
  constructor(public state: AppStateService) { }

  ngOnInit() { }
  ngOnDestroy() { }

  onPressTime() {
    this.state.annonceTime();
  }
}
