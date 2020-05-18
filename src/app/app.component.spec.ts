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
    const stateService = TestBed.inject(AppStateService);
    spyOn(stateService, 'startTimer').and.callThrough();
    spyOn(stateService, 'stopTimer').and.callThrough();

    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    expect(app).toBeTruthy();
    expect(stateService.startTimer).toHaveBeenCalled();
    expect(stateService.stopTimer).not.toHaveBeenCalled();
    app.ngOnDestroy();
    expect(stateService.stopTimer).toHaveBeenCalled();
  });

  it(`should have as title 'Wall Clock'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Wall Clock');
  });

  it(`should call requestFullscreen function after click`, () => {
    const target = {
      requestFullscreen: () => { }
    };
    spyOn(target, 'requestFullscreen').and.callThrough();

    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    app.onClick(target);
    expect(target.requestFullscreen).toHaveBeenCalled();
  });

  it(`should call mozRequestFullScreen function after click`, () => {
    const target = {
      mozRequestFullScreen: () => { }
    };
    spyOn(target, 'mozRequestFullScreen').and.callThrough();

    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    app.onClick(target);
    expect(target.mozRequestFullScreen).toHaveBeenCalled();
  });

  it(`should call webkitRequestFullscreen function after click`, () => {
    const target = {
      webkitRequestFullscreen: () => { }
    };
    spyOn(target, 'webkitRequestFullscreen').and.callThrough();

    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    app.onClick(target);
    expect(target.webkitRequestFullscreen).toHaveBeenCalled();
  });

  it(`should call msRequestFullscreen function after click`, () => {
    const target = {
      msRequestFullscreen: () => { }
    };
    spyOn(target, 'msRequestFullscreen').and.callThrough();

    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    app.onClick(target);
    expect(target.msRequestFullscreen).toHaveBeenCalled();
  });

  it(`should not call requestFullscreen function after click if not support`, () => {
    const target = {    };
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();

    app.onClick(target);
    expect(app.isRun).toBe(true);
  });
});
