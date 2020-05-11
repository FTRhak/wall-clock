import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { AppStateService } from 'src/app/services/app-state.service';
import { RadioService } from 'src/app/services/radio.service';

@Component({
  selector: 'panel-radio',
  templateUrl: './panel-radio.component.html',
  styleUrls: ['./panel-radio.component.less']
})
export class PanelRadioComponent implements OnInit, OnDestroy {
  public edit = false;

  constructor(
    public state: AppStateService,
    public radioManager: RadioService
  ) { }

  ngOnInit() {
    this.radioManager.loadRadioList();
  }

  ngOnDestroy() { }

  onTurnOnRadio() {
    this.edit = true;
  }

  onPlayRadioChanel(station) {
    this.radioManager.play(station);
  }
}
