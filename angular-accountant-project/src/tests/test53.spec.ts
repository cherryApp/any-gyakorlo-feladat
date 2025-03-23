import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BillEditorComponent } from 'src/app/common/bill-editor/bill-editor.component';
import { AppComponent } from '../app/app.component';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;

  let app: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent,
        BillEditorComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('app-bill-editor should exist', () => {
    const editor = fixture.debugElement.nativeElement.querySelector(
      'app-bill-editor'
    );
    expect(editor).toBeTruthy();
  });

  it('currentBill should be given to app-bill-editor', async () => {
    await fixture.whenStable();

    const editor = fixture.debugElement.nativeElement.querySelector(
      'app-bill-editor[ng-reflect-bill]'
    );
    expect(editor).toBeTruthy();
  });

  it('onUpdate should be called', async () => {
    await fixture.whenStable();

    const spy = jest.spyOn<AppComponent, any>(app, 'onUpdate');

    const button = fixture.debugElement.nativeElement.querySelector(
      'app-bill-editor button'
    );
    button.click();

    await fixture.whenStable();
    expect(spy).toHaveBeenCalled();
  });

  it('onUpdate should be called with a Bill', async () => {
    await fixture.whenStable();

    const spy = jest.spyOn<AppComponent, any>(app, 'onUpdate');

    const button = fixture.debugElement.nativeElement.querySelector(
      'app-bill-editor button'
    );
    button.click();

    await fixture.whenStable();
    expect(spy).toHaveBeenCalledWith(app.currentBill);
  });
});
