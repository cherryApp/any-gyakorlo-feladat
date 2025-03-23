import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { University } from 'src/app/model/university';
import { UniversityService } from 'src/app/service/university.service';

import { AppComponent } from '../app/app.component';

import { universities } from './mocks/universities.mock';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: UniversityService,
          useValue: {
            getAll(): Observable<University[]> {
              return of(universities);
            }
          }
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('the page should contain the following text -- name', async () => {
    await fixture.whenStable();
    const div = fixture.debugElement.nativeElement.querySelector('div');
    expect(div.textContent).toContain('University of Minnesota - Duluth');
  });

  it('the page should contain the following text -- e-mail', async () => {
    await fixture.whenStable();
    const div = fixture.debugElement.nativeElement.querySelector('div');
    expect(div.textContent).toContain('lmaultby4@clickbank.net');
  });

  it('the page should contain the following text -- language', async () => {
    await fixture.whenStable();
    const div = fixture.debugElement.nativeElement.querySelector('div');
    expect(div.textContent).toContain('Croatian');
  });

  it('the page should contain the following text -- students', async () => {
    await fixture.whenStable();
    const div = fixture.debugElement.nativeElement.querySelector('div');
    expect(div.textContent).toContain('3699');
  });

});
