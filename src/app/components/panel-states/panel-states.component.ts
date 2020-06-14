import { Component, OnInit } from '@angular/core';
import { AppStateService } from 'src/app/services/app-state.service';

@Component({
  selector: 'panel-states',
  templateUrl: './panel-states.component.html',
  styleUrls: ['./panel-states.component.less']
})
export class PanelStatesComponent implements OnInit {

  constructor(public appState: AppStateService) { }

  ngOnInit(): void {
  }

}
