import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppStateService } from 'src/app/services/app-state.service';
import { WidgetType } from 'src/app/models/widget-type.enum';

@Component({
  selector: 'panel-radio',
  templateUrl: './panel-radio.component.html',
  styleUrls: ['./panel-radio.component.less']
})
export class PanelRadioComponent implements OnInit, OnDestroy {
  get active() {
    return this.state.activeWidget === WidgetType.Radio;
  }
  constructor(
    public state: AppStateService
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() { }

  onTurnOnRadio() {
    if (this.state.activeWidget === WidgetType.Radio) {
      this.state.activeWidget = null;
    } else {
      this.state.activeWidget = WidgetType.Radio;
    }
  }
}
