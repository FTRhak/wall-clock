import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppStateService } from 'src/app/services/app-state.service';
import { VoiceService } from 'src/app/services/voice.service';
import { PanelAnnounceTimeComponent } from './panel-announce-time.component';

describe('PanelAnnounceTimeComponent', () => {
  let component: PanelAnnounceTimeComponent;
  let fixture: ComponentFixture<PanelAnnounceTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PanelAnnounceTimeComponent],
      providers: [
        AppStateService,
        { provide: VoiceService, useValue: {} }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelAnnounceTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
