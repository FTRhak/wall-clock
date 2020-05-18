import { Component, OnInit } from '@angular/core';
import { StatusService } from 'src/app/services/status.service';

@Component({
  selector: 'panel-status',
  templateUrl: './panel-status.component.html',
  styleUrls: ['./panel-status.component.less']
})
export class PanelStatusComponent implements OnInit {

  constructor(public status: StatusService) { }

  ngOnInit(): void {
  }

}
