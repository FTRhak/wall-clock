import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { share, shareReplay } from 'rxjs/operators';

@Injectable()
export class VoiceService {
  private isPlayingTime = false;

  runResponsiveVoice(text: string) {
    const responsiveVoice = 'responsiveVoice';
    if (window[responsiveVoice]) {
      window[responsiveVoice].speak(text, 'Ukrainian Female', { rate: 1 });
    }
  }

  preLoadHourses() {
    const list = [];
    for (let i = 0; i <= 23; i++) {
      list.push(`./assets/ua/time/hours/h${i}.mp3`);
    }
    for (let i = 0; i <= 23; i++) {
      list.push(`./assets/ua/time/minutes/${i}.mp3`);
    }
    return forkJoin(list.map(url => {
      const audio = new Audio();
      audio.src = url;
      return new Promise((res, req) => audio.addEventListener('canplaythrough', () => res(audio), false));
    }));
  }

  runPlayAudioTime(hour: number, minutes: number) {
    if (!this.isPlayingTime) {
      this.preLoadHourses().pipe(
        shareReplay(1, 100000000000)
      ).subscribe((res: any[]) => {
        console.log('Play time');
        const audioHour = res[hour];
        const audioMinutes = res[24 + minutes];
        audioHour.onpause = () => {
          audioMinutes.onpause = () => {
            audioHour.onpause = null;
            audioMinutes.onpause = null;
            this.isPlayingTime = false;
          };
          audioMinutes.play();
        };
        audioHour.play();
      });
    }
  }
}
