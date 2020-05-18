import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelAsistentComponent } from './panel-asistent.component';

describe('PanelAsistentComponent', () => {
  let component: PanelAsistentComponent;
  let fixture: ComponentFixture<PanelAsistentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PanelAsistentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelAsistentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
