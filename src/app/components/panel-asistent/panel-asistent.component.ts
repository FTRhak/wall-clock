import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { StatusService } from 'src/app/services/status.service';
declare const webkitSpeechRecognition;
declare const webkitSpeechGrammarList;

@Component({
  selector: 'panel-asistent',
  templateUrl: './panel-asistent.component.html',
  styleUrls: ['./panel-asistent.component.less']
})
export class PanelAsistentComponent implements OnInit, OnDestroy {
  public active = false;
  private grammar = '#JSGF V1.0; grammar colors; public <color> = година | радіо ;';
  public recognition: SpeechRecognition;

  public text = '';
  constructor(private statusService: StatusService) { }

  ngOnInit() {
    this.recognition = window['SpeechRecognition']
      ? new SpeechRecognition()
      : (window['webkitSpeechRecognition'] ? new webkitSpeechRecognition() : null);
    const speechRecognitionList: SpeechGrammarList = window['SpeechGrammarList']
      ? new SpeechGrammarList()
      : (window['webkitSpeechGrammarList'] ? new webkitSpeechGrammarList() : null);

    if (this.recognition) {
      speechRecognitionList.addFromString(this.grammar, 1);

      this.recognition.grammars = speechRecognitionList;
      this.recognition.continuous = false;
      this.recognition.lang = 'en';
      this.recognition.interimResults = false;
      this.recognition.maxAlternatives = 1;

      console.log('==', this.recognition);
      //this.recognition.onaudiostart = (event) => {
      //  console.log('---onaudiostart---', event);
      //  this.statusService.addWarning('-START-');
      //};
      this.recognition.addEventListener('audiostart', (event) => {
        console.log('---onaudiostart---', event);
        this.statusService.addWarning('-START-');
      });
      this.recognition.onresult = (event) => {
        this.text = event.results[0][0].transcript;
        console.warn('text:', event.results[0][0].transcript);
        this.statusService.addError(this.text);
        this.statusService.addWarning('-RESULT-');
        console.log('---onresult---', event);
      };
      this.recognition.onend = (event) => {
        console.log('---onend---', event);
        this.statusService.addWarning('-END-');
        if (this.active) {
          this.recognition.start();
        }
      };
      this.statusService.addWarning('-INIT-' + Object.keys(this.recognition).join('|'));
    } else {
      this.statusService.addError('SpeechGrammarList does not support');
    }

    /*
    this.recognition.onaudioend = (event) => {
      console.log('---onaudioend---', event);
    };
    this.recognition.onaudiostart = (event) => {
      console.log('---onaudiostart---', event);
    };
    this.recognition.onerror = (event) => {
      console.log('---onerror---', event);
    };
    this.recognition.onnomatch = (event) => {
      console.log('---onnomatch---', event);
    };
    this.recognition.onsoundend = (event) => {
      console.log('---onsoundend---', event);
    };
    this.recognition.onsoundstart = (event) => {
      console.log('---onsoundstart---', event);
    };
    this.recognition.onspeechend = (event) => {
      console.log('---onspeechend---', event);
    };
    this.recognition.onspeechstart = (event) => {
      console.log('---onspeechstart---', event);
    };*/
  }

  onActivate() {
    this.active = !this.active;
    if (this.recognition) {
      this.recognition.stop();
      if (this.active) {
        this.recognition.start();
      }
    }
  }

  ngOnDestroy() {
    if (this.recognition) {
      this.recognition.stop();
    }
  }
}
