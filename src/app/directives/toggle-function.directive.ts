import { Directive, Input, HostListener, HostBinding } from '@angular/core';
import { AppStateService } from '../services/app-state.service';
import { WidgetType } from '../models/widget-type.enum';

@Directive({
  selector: '[toggleFunction]'
})
export class ToggleFunctionDirective {
  private action: any;
  @Input() set toggleFunction(value) {
    this.action = WidgetType[value];
  }
  @HostBinding('class.active') get valid() { return this.state.activeWidget === this.action; }

  @HostListener('click') onClick() {
    if (this.state.activeWidget === this.action) {
      this.state.activeWidget = null;
    } else {
      this.state.activeWidget = this.action;
    }
  }

  constructor(public state: AppStateService) { }

}
