import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { User } from '../app/model/user';

import { AppComponent } from '../app/app.component';
import { UserService } from 'src/app/service/user.service';
import { Observable, of } from 'rxjs';

import { users } from './mock.users';

export const getPrivateProperty = (instance: any, propName: string) => {
  return Object.getOwnPropertyDescriptors(instance)[propName]?.value;
};

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        {
          provide: UserService,
          useValue: {
            getAll(): Observable<User[]> {
              return of(users);
            },
            delete(): Observable<User> {
              return of(users[0]);
            }
          }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('user cards should be created', async () => {
    fixture.detectChanges();
    const cards = fixture.debugElement.nativeElement.querySelectorAll('.card');

    await fixture.whenStable();
    expect(cards.length).toBe(13);
  });

  it('the content of the first user card should be correct', async () => {
    fixture.detectChanges();
    const card = fixture.debugElement.nativeElement.querySelector('.card');
    const content = card.textContent;

    await fixture.whenStable();
    expect(content).toMatch(/Bedford/gm);
  });

  it('cards should contain a warning button', async () => {
    fixture.detectChanges();
    const button = fixture.debugElement.nativeElement.querySelector(
      '.card .btn-warning'
    );

    await fixture.whenStable();
    expect(button).toBeTruthy();
  });

  it('selected user should be deleted', async () => {
    fixture.detectChanges();
    const button = fixture.debugElement.nativeElement.querySelector(
      '.card .btn-warning'
    );
    const spy = jest.spyOn<AppComponent, any>(app, 'onDelete');

    button.click();
    fixture.detectChanges();

    await fixture.whenStable();
    expect(spy).toHaveBeenCalledWith(users[0]);
  });

  it('userService.delete should be called', async () => {
    fixture.detectChanges();
    const button = fixture.debugElement.nativeElement.querySelector(
      '.card .btn-warning'
    );
    const userService = getPrivateProperty(app, 'userService');
    const spy = jest.spyOn<UserService, any>(userService, 'delete');

    button.click();
    fixture.detectChanges();

    await fixture.whenStable();

    try {
      expect(spy).toHaveBeenCalledWith(users[0]);
    } catch(e) {
      expect(spy).toHaveBeenCalledWith(users[0].id);
    }
  });

});
