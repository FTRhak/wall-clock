import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetRadioComponent } from './widget-radio.component';

describe('WidgetRadioComponent', () => {
  let component: WidgetRadioComponent;
  let fixture: ComponentFixture<WidgetRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
