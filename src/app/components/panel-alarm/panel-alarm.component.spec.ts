import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelAlarmComponent } from './panel-alarm.component';

describe('PanelAlarmComponent', () => {
  let component: PanelAlarmComponent;
  let fixture: ComponentFixture<PanelAlarmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PanelAlarmComponent]
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
