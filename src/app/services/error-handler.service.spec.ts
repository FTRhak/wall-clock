import { TestBed } from '@angular/core/testing';

import { ErrorHandlerService } from './error-handler.service';
import { StatusService } from './status.service';

describe('ErrorHandlerService', () => {
  let service: ErrorHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ErrorHandlerService,
        { provide: StatusService, useValue: { addError: () => { } } }
      ]
    });
    service = TestBed.inject(ErrorHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
