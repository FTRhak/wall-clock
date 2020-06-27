import { Injectable } from '@angular/core';

@Injectable()
export class VoiceService {
  private isPlayingTime = false;

  runResponsiveVoice(text: string) {
    const responsiveVoice = 'responsiveVoice';
    if (window[responsiveVoice]) {
      window[responsiveVoice].speak(text, 'Ukrainian Female', { rate: 1 });
    }
  }

  runPlayAudioTime(hour: number, minutes: number) {
    if (!this.isPlayingTime) {
      this.isPlayingTime = true;
      const audioHour = new Audio(`./assets/ua/time/hours/h${hour}.mp3`);
      audioHour.onpause = () => {
        const audioMinutes = new Audio(`./assets/ua/time/minutes/${minutes}.mp3`);
        audioMinutes.onpause = () => {
          this.isPlayingTime = false;
        };
        audioMinutes.play();
      };
      audioHour.play();
    }
  }
}
