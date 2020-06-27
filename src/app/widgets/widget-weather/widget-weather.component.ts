import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'widget-weather',
  templateUrl: './widget-weather.component.html',
  styleUrls: ['./widget-weather.component.less']
})
export class WidgetWeatherComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private el: ElementRef,
    private render: Renderer2
  ) { }

  ngOnInit(): void {
    // https://meteoprog.ua/js/winformer.min.js?id=100
    /*const script = document.createElement('script');
    '<script type="text/javascript" src="https://meteoprog.ua/js/winformer.min.js?id=100"></script>';
    this.render.appendChild(this.el.nativeElement.children[0], script);
    script.type = 'text/javascript';
    script.src = 'https://meteoprog.ua/js/winformer.min.js?id=100';*/
    this.getData();

  }

  private getRequestOptions() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Cache-Control': 'no-cache',
      'access-control-allow-origin': '*',
      'access-control-allow-headers': 'origin, x-requested-with, content-type',
      'access-control-allow-methods': 'GET, HEAD, OPTIONS, POST, PUT, TRACE, DELETE'
    });
    return { headers, withCredentials: true };
  }
  getData() {
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
        n = new XMLHttpRequest,
        o = JSON.parse(e),
        r = o.domain.substring(0, o.domain.length - 1) + '/widget_v2/wshow/' + o.id + '/?nocache=1',
        n.open('POST', r, !0),
        n.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'),
        n.onreadystatechange = () => {
          4 === n.readyState && 200 === n.status && render(n.responseText)
        }
        ,
        n.send('params=' + e)) : ++i < c.length && u(i)
    }
    c = document.querySelectorAll('.meteoprog-informer');
    u(0);
  }

}
