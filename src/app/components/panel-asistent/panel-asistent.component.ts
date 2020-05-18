import { Component, OnInit, OnDestroy, Input } from '@angular/core';
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
  constructor() { }

  ngOnInit() {
    this.recognition = window['SpeechRecognition']
      ? new SpeechRecognition()
      : new webkitSpeechRecognition();
    const speechRecognitionList: SpeechGrammarList = window['SpeechGrammarList']
      ? new SpeechGrammarList()
      : new webkitSpeechGrammarList();

    speechRecognitionList.addFromString(this.grammar, 1);

    this.recognition.grammars = speechRecognitionList;
    this.recognition.continuous = false;
    this.recognition.lang = 'uk';
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 1;

    console.log(speechRecognitionList);

    this.recognition.onresult = (event) => {
      this.text = event.results[0][0].transcript;
      console.warn('text:', event.results[0][0].transcript);
      console.log('---onresult---', event);
    };
    this.recognition.onend = (event) => {
      console.log('---onend---', event);
      if (this.active) {
        this.recognition.start();
      }
    };
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
    if (this.active) {
      this.recognition.start();
    } else {
      this.recognition.stop();
    }
  }

  ngOnDestroy() {
    this.recognition.stop();
  }
}
