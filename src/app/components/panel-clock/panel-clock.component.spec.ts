import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppStateService } from 'src/app/services/app-state.service';
import { VoiceService } from 'src/app/services/voice.service';
import { PanelClockComponent } from './panel-clock.component';

describe('PanelClockComponent', () => {
  let component: PanelClockComponent;
  let fixture: ComponentFixture<PanelClockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PanelClockComponent],
      providers: [
        AppStateService,
        { provide: VoiceService, useValue: {} }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
