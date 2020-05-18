import { Injectable, ErrorHandler } from '@angular/core';
import { StatusService } from './status.service';

@Injectable()
export class ErrorHandlerService implements ErrorHandler {
  constructor(private statusService: StatusService) {}
  handleError(error) {
    this.statusService.addError(error);
  }
}
