import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelAnnounceTimeComponent } from './panel-announce-time.component';

describe('PanelAnnounceTimeComponent', () => {
  let component: PanelAnnounceTimeComponent;
  let fixture: ComponentFixture<PanelAnnounceTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PanelAnnounceTimeComponent]
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
