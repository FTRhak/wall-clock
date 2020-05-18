import { TestBed } from '@angular/core/testing';

import { StatusService } from './status.service';
import { AppStateService } from './app-state.service';
import { VoiceService } from './voice.service';

describe('AppStateService', () => {
  let service: AppStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        VoiceService,
        AppStateService
      ]
    });
    service = TestBed.inject(AppStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
