import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetAnnounceTimeComponent } from './widget-announce-time.component';

describe('WidgetAnnounceTimeComponent', () => {
  let component: WidgetAnnounceTimeComponent;
  let fixture: ComponentFixture<WidgetAnnounceTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetAnnounceTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetAnnounceTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
