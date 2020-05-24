import { Injectable } from '@angular/core';
import { RedioStation } from '../models/radio-station.model';

@Injectable()
export class RadioService {
  public stations: RedioStation[] = [{
    name: 'Люкс FM',
    src: 'http://icecastdc.luxnet.ua/lux_mp3_128'
  }, {
    name: 'Львівська хвиля',
    src: 'http://onair.lviv.fm:8000/lviv.fm'
  }, {
    name: 'Ретро FM',
    src: 'http://media2.brg.ua:8000/shanson_h'
  }, {
    name: 'Kiss FM',
    src: 'http://online.kissfm.ua/KissFM'
  }];
  public station: RedioStation;

  private audio;
  public volume = 1;
  constructor() { }

  loadRadioList() {
    //this.stations = stations;
  }

  play(station: RedioStation) {
    this.stop();
    this.station = station;
    this.audio = new Audio(this.station.src);
    this.setAudioVolume();
    this.audio.play();
  }

  stop() {
    this.station = null;
    if (this.audio) {
      this.audio.pause();
      this.audio = null;
    }
  }

  setAudioVolume() {
    if (this.audio) {
      this.audio.volume = this.volume;
    }
  }

  volumeIncrease() {
    if (this.volume <= 0.9) {
      this.volume += 0.1;
    }
  }

  volumeDecrease() {
    if (this.volume >= 0.1) {
      this.volume -= 0.1;
      this.setAudioVolume();
    }
  }
}
