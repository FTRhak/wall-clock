import { Injectable } from '@angular/core';
import { RedioStation } from '../models/radio-station.model';

@Injectable()
export class RadioService {
  public stations: RedioStation[] = [{
    name: 'Ретро FM',
    src: 'http://media2.brg.ua:8000/shanson_h'
  }, {
    name: 'Kiss FM',
    src: 'http://online.kissfm.ua/KissFM'
  }];
  public station: RedioStation;

  private audio;
  constructor() { }

  loadRadioList() {
    //this.stations = stations;
  }

  play(station: RedioStation) {
    this.stop();
    this.station = station;
    this.audio = new Audio(this.station.src);
    this.audio.play();
  }

  stop() {
    this.station = null;
    if (this.audio) {
      console.log(this.audio);
      this.audio.pause();
      this.audio = null;
    }
  }
}
