import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { AsyncSubject } from 'rxjs';
import { VoiceService } from 'src/app/services/voice.service';
import { SkyMap } from './sky-map.enum';

@Component({
  selector: 'widget-weather',
  templateUrl: './widget-weather.component.html',
  styleUrls: ['./widget-weather.component.less']
})
export class WidgetWeatherComponent implements OnInit {
  public day1: any;
  public day2: any;
  public day3: any;
  public day4: any;

  constructor(
    private el: ElementRef,
    private voice: VoiceService
  ) { }

  ngOnInit(): void {
    this.getData().subscribe(res => {
      console.log('weather complete');
      this.day1 = this.getDayInfo('.constructor__ext-foreacst-1');
      this.day2 = this.getDayInfo('.constructor__ext-foreacst-2');
      this.day3 = this.getDayInfo('.constructor__ext-foreacst-3');
      this.day4 = this.getDayInfo('.constructor__ext-foreacst-4');
    });
  }

  get dEl() {
    return this.el.nativeElement;
  }

  tellWeather(dayShift, day) {
    let text = '';
    switch (dayShift) {
      case 0: {
        text += 'Сьогодні ';
        break;
      }
      case 1: {
        text += 'Завтра ';
        break;
      }
      case 2: {
        text += 'Післязавтра ';
        break;
      }
      case 3: {
        text += 'Через три дні ';
        break;
      }
      case 4: {
        text += 'Через чотири дні ';
        break;
      }
    }
    text += 'погода. . . ';
    text += day[0];
    text += ' . . .';
    text += day[1];
    this.voice.runResponsiveVoice(text);
  }

  getDayInfo(container) {
    const temperature = this.dEl.querySelector(container)
      .querySelector('.constructor__ext-foreacst-temp').innerText;
    const sky = this.dEl.querySelector(container)
      .querySelector('.icon-weather').getAttribute('class');
    const skyKey = sky.split(' ').filter(el => ['icon-weather', 'icon-48x50'].indexOf(el) === -1);
    const skyName = SkyMap(skyKey.length ? skyKey[0] : '');
    return [temperature, skyName];
  }

  getData() {
    const aSubject = new AsyncSubject();
    let c;
    function u(i) {
      let e, render, n, o, r;
      const a = c[i].getAttribute('data-params');
      const l = JSON.parse(a);
      const d = l.city_ids.split(',').length;
      c[i].querySelectorAll('a[href*="meteoprog."]').length >= 2 * d + 1 ? (e = a,
        render = (e) => {
          const container = document.createElement('div', ({ class: 'outerelem' } as any));
          container.innerHTML = e;
          for (var n = container.querySelectorAll('link'), o = container.querySelectorAll('img'), r = l.domain.substring(0, l.domain.length - 1), a = 0; a < n.length; a++) {
            n[a].href = r + n[a].getAttribute('href');
          }
          for (a = 0; a < o.length; a++) {
            o[a].src = r + o[a].getAttribute('src');
          }
          document.querySelectorAll('.meteoprog-informer')[i].innerHTML = container.innerHTML;
          ++i < c.length && u(i);
        }
        ,
        n = new XMLHttpRequest(),
        o = JSON.parse(e),
        r = o.domain.substring(0, o.domain.length - 1) + '/widget_v2/wshow/' + o.id + '/?nocache=1',
        n.open('POST', r, !0),
        n.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'),
        n.onreadystatechange = () => {
          if (4 === n.readyState && 200 === n.status) {
            render(n.responseText);
            aSubject.next(n.responseText);
            aSubject.complete();
          }
        }
        ,
        n.send('params=' + e)) : ++i < c.length && u(i)
    }
    c = document.querySelectorAll('.meteoprog-informer');
    u(0);
    return aSubject;
  }

}
