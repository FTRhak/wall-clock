import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AppStateService } from './services/app-state.service';
import { ErrorHandlerService } from './services/error-handler.service';
import { Component } from '@angular/core';

describe('AppComponent', () => {
  //#region Mock components
  @Component({
    selector: 'panel-alarm',
    template: '<div>panel-alarm</div>'
  })
  class PanelAlarmMockComponent { }

  @Component({
    selector: 'panel-announce-time',
    template: '<div>panel-announce-time</div>'
  })
  class PanelAnnounceTimeMockComponent { }


  @Component({
    selector: 'panel-asistent',
    template: '<div>panel-asistent</div>'
  })
  class PanelAsistentMockComponent { }

  @Component({
    selector: 'panel-clock',
    template: '<div>panel-clock</div>'
  })
  class PanelClockMockComponent { }

  @Component({
    selector: 'panel-radio',
    template: '<div>panel-radio</div>'
  })
  class PanelRadioMockComponent { }

  @Component({
    selector: 'panel-status',
    template: '<div>panel-status</div>'
  })
  class PanelStatusMockComponent { }
  //#endregion

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        PanelAlarmMockComponent,
        PanelAnnounceTimeMockComponent,
        PanelAsistentMockComponent,
        PanelClockMockComponent,
        PanelRadioMockComponent,
        PanelStatusMockComponent,
        AppComponent
      ],
      providers: [
        {
          provide: AppStateService,
          useValue: {
            startTimer: () => { },
            stopTimer: () => { }
          }
        },
        {
          provide: ErrorHandlerService,
          useValue: {}
        }
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Wall Clock'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Wall Clock');
  });

});
