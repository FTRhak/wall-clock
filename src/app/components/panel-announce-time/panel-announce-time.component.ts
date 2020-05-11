import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { AppStateService } from 'src/app/services/app-state.service';

@Component({
  selector: 'panel-announce-time',
  templateUrl: './panel-announce-time.component.html',
  styleUrls: ['./panel-announce-time.component.less']
})
export class PanelAnnounceTimeComponent implements OnInit, OnDestroy {
  constructor(public state: AppStateService) { }

  ngOnInit() { }

  ngOnDestroy() { }
}
