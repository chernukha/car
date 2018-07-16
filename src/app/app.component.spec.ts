import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';


describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent,
        FormComponent,
        ListComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
  }));

  it('should create the app', () => {
    const appComponent = fixture.componentInstance;
    expect(appComponent).toBeTruthy();
  });

  it(`should have 'app-list' component`, () => {
    const appElement = fixture.debugElement.nativeElement;
    expect(appElement.querySelector('app-list')).toBeTruthy();
  });

  it(`should call formDisplay`, () => {
    const appComponent = fixture.componentInstance;
    spy = spyOn(appComponent, 'formDisplay');
    const button: HTMLElement = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    expect(spy.calls.any()).toBe(true);
  });

  it(`should have 'app-form' component`, () => {
    const appComponent = fixture.componentInstance;
    appComponent.formDisplay(true);
    const appElement = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    expect(appElement.querySelector('app-form')).toBeTruthy();
  });

  it(`should have 'app-list' component`, () => {
    const appComponent = fixture.componentInstance;
    appComponent.editCar(2);
    expect(appComponent.chosenCar === 2 && appComponent.formDisplayStatus === true).toBe(true);
  });

});
