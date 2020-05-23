import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppStateService } from 'src/app/services/app-state.service';
import { RadioService } from 'src/app/services/radio.service';
import { VoiceService } from 'src/app/services/voice.service';
import { PanelRadioComponent } from './panel-radio.component';

describe('PanelRadioComponent', () => {
  let component: PanelRadioComponent;
  let fixture: ComponentFixture<PanelRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PanelRadioComponent],
      providers: [
        AppStateService,
        RadioService,
        { provide: VoiceService, useValue: {} }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
