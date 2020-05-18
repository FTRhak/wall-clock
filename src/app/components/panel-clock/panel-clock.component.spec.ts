import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelClockComponent } from './panel-clock.component';

describe('PanelClockComponent', () => {
  let component: PanelClockComponent;
  let fixture: ComponentFixture<PanelClockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PanelClockComponent]
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
