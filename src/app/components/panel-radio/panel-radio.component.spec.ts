import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelRadioComponent } from './panel-radio.component';

describe('PanelRadioComponent', () => {
  let component: PanelRadioComponent;
  let fixture: ComponentFixture<PanelRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PanelRadioComponent]
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
