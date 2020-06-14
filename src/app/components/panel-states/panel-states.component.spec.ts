import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelStatesComponent } from './panel-states.component';

describe('PanelStatesComponent', () => {
  let component: PanelStatesComponent;
  let fixture: ComponentFixture<PanelStatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelStatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
