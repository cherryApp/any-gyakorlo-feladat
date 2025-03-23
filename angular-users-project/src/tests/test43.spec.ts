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

  it('the borderRadius of cards should be correct', async () => {
    fixture.detectChanges();
    const card = fixture.debugElement.nativeElement.querySelector('.card');
    const cardStyles = window.getComputedStyle(card);

    await fixture.whenStable();
    expect(cardStyles.borderRadius).toBe('5px');
  });

  it('the border of cards should be correct', async () => {
    fixture.detectChanges();
    const card = fixture.debugElement.nativeElement.querySelector('.card');
    const cardStyles = window.getComputedStyle(card);

    await fixture.whenStable();
    expect(cardStyles.border).toBe('2px solid #b6b6e6');
  });



});
