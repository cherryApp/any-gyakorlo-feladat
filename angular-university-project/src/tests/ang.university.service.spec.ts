import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { UniversityService } from '../app/service/university.service';

describe('UniversityService', () => {

  let service: UniversityService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ]
    });
    service = TestBed.inject(UniversityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAll method should exist', () => {
    expect(service.getAll).toBeTruthy();
  });

  it('create method should exist', () => {
    expect(service.create).toBeTruthy();
  });

  it('update method should exist', () => {
    expect(service.update).toBeTruthy();
  });

  it('delete method should exist', () => {
    expect(service.delete).toBeTruthy();
  });

  it('type of the getAll method should be correct', () => {
    expect(service.getAll instanceof Function).toBeTruthy();
  });

  it('type of the create method should be correct', () => {
    expect(service.create instanceof Function).toBeTruthy();
  });

  it('type of the get method should be correct', () => {
    expect(service.get instanceof Function).toBeTruthy();
  });

  it('type of the update method should be correct', () => {
    expect(service.update instanceof Function).toBeTruthy();
  });

  it('type of the delete method should be correct', () => {
    expect(service.delete instanceof Function).toBeTruthy();
  });

});
