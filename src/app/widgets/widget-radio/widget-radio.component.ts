import { Component, OnInit } from '@angular/core';
import { RedioStation } from '../../models/radio-station.model';
import { RadioService } from 'src/app/services/radio.service';

@Component({
  selector: 'widget-radio',
  templateUrl: './widget-radio.component.html',
  styleUrls: ['./widget-radio.component.less']
})
export class WidgetRadioComponent implements OnInit {
  get listOfStations(): RedioStation[] {
    return this.radio.stations;
  }
  get selectedStation(): RedioStation {
    return this.radio.station || {name: ''};
  }

  get volume() {
    return this.radio.volume * 100;
  }
  constructor(private radio: RadioService) { }

  ngOnInit(): void {
  }

  volumeIncrease() {
    this.radio.volumeIncrease();
  }

  volumeDecrease() {
    this.radio.volumeDecrease();
  }

  onSelectStation(item) {
    this.radio.play(item);
  }
}
