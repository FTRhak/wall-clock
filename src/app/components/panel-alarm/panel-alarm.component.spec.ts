import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppStateService } from 'src/app/services/app-state.service';
import { VoiceService } from 'src/app/services/voice.service';
import { PanelAlarmComponent } from './panel-alarm.component';

describe('PanelAlarmComponent', () => {
  let component: PanelAlarmComponent;
  let fixture: ComponentFixture<PanelAlarmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PanelAlarmComponent],
      providers: [
        AppStateService,
        { provide: VoiceService, useValue: {} }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelAlarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
