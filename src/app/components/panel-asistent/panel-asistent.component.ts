import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'panel-asistent',
  templateUrl: './panel-asistent.component.html',
  styleUrls: ['./panel-asistent.component.less']
})
export class PanelAsistentComponent implements OnInit, OnDestroy {
  public active = false;
  constructor() { }

  ngOnInit() { }

  ngOnDestroy() { }
}
