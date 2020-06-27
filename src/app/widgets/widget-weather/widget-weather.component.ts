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
    this.getData().subscribe(res => {
      console.log('RES:', res);
    });

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
    const f =  new FormData();
    f.append('params', JSON.stringify({"city_ids":"19703","domain":"https://meteoprog.ua/","id":"5ef7898398485263798b4693","lang":"ua"}));
    //const data = {params: {"city_ids":"19703","domain":"https://meteoprog.ua/","id":"5ef7898398485263798b4693","lang":"ua"}};
    return this.http.post('https://meteoprog.ua/widget_v2/wshow/5ef7898398485263798b4693/?nocache=1', f, this.getRequestOptions());
  }

}
