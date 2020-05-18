import { Injectable } from '@angular/core';
import { RedioStation } from '../models/radio-station.model';
import { HowlModel } from '../models/howl.model';
declare const Howl;

const stations = [{
  freq: '81.4',
  title: 'BBC Radio 1',
  src: 'http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio1_mf_q',
  howl: null
}, {
  freq: '89.9',
  title: 'Hip Hop Hits',
  src: 'http://tunein4.streamguys1.com/hhbeafree5',
  howl: null
}, {
  freq: '98.9',
  title: 'CNN',
  src: 'http://tunein.streamguys1.com/cnn',
  howl: null
}, {
  freq: '103.3',
  title: '80\'s Hits',
  src: 'http://tunein4.streamguys1.com/80shtfree1',
  howl: null
}, {
  freq: '107.7',
  title: 'Today\'s Hits',
  src: 'http://rfcmedia.streamguys1.com/MusicPulse.mp3',
  howl: null
}];

@Injectable()
export class RadioService {
  public stations: RedioStation[];
  public station: RedioStation;

  constructor() { }

  loadRadioList() {
    this.stations = stations;
  }

  play(station: RedioStation) {
    this.stop();
    let sound: HowlModel;
    this.station = station;
    if (this.station.howl) {
      sound = this.station.howl;
    } else {
      sound = this.station.howl = new Howl({
        src: this.station.src,
        html5: true,
        format: ['mp3', 'aac']
      });
      // console.log('===', sound);
    }
    sound.play();
  }

  stop() {
    if (this.station && this.station.howl) {
      this.station.howl.unload();
      this.station = null;
    }
  }
}
