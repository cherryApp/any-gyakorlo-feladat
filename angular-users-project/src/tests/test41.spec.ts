import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { User } from '../app/model/user';
import { UserService } from 'src/app/service/user.service';

describe('User', () => {

  let service: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ],
    });
  });

  beforeEach(async () => {
    service = TestBed.inject(UserService);
  });

  // Testing the model.
  it('should create an instance', () => {
    expect(new User()).toBeTruthy();
  });

  it('id should exist', () => {
    const user = new User();
    expect(typeof user.id).not.toEqual('undefined');
  });

  it('name should exist', () => {
    const user = new User();
    expect(typeof user.name).not.toEqual('undefined');
  });

  it('category should exist', () => {
    const user = new User();
    expect(typeof user.category).not.toEqual('undefined');
  });

  it('email should exist', () => {
    const user = new User();
    expect(typeof user.email).not.toEqual('undefined');
  });

  it('id should be a number', () => {
    const user = new User();
    expect(typeof user.id).toEqual('number');
  });

  it('name should be a string', () => {
    const user = new User();
    expect(typeof user.name).toEqual('string');
  });

  it('category should be a string', () => {
    const user = new User();
    expect(typeof user.category).toEqual('string');
  });

  it('e-mail should be a string', () => {
    const user = new User();
    expect(typeof user.email).toEqual('string');
  });

  // Testing the service.
  it('userService should be created', () => {
    expect(service).toBeTruthy();
  });

  it('userService.getAll should exist', () => {
    expect(typeof service.getAll).not.toEqual('undefined');
  });

  it('userService.get should exist', () => {
    expect(typeof service.get).not.toEqual('undefined');
  });

  it('userService.create should exist', () => {
    expect(typeof service.create).not.toEqual('undefined');
  });

  it('userService.update should exist', () => {
    expect(typeof service.update).not.toEqual('undefined');
  });

  it('userService.delete should exist', () => {
    expect(typeof service.delete).not.toEqual('undefined');
  });

  it('userService.getAll should be a function', () => {
    expect(typeof service.getAll).toEqual('function');
  });

  it('userService.get should be a function', () => {
    expect(typeof service.get).toEqual('function');
  });

  it('userService.create should be a function', () => {
    expect(typeof service.create).toEqual('function');
  });

  it('userService.update should be a function', () => {
    expect(typeof service.update).toEqual('function');
  });

  it('userService.delete should be a function', () => {
    expect(typeof service.delete).toEqual('function');
  });

});
