import { University } from '../app/model/university';

describe('university', () => {

  it('should create an instance', () => {
    expect(new University()).toBeTruthy();
  });

  it('university should contain the correct properties -- id', () => {
    const university = new University();
    expect(typeof university.id !== 'undefined').toBeTruthy();
  });

  it('university should contain the correct properties -- name', () => {
    const university = new University();
    expect(typeof university.name !== 'undefined').toBeTruthy();
  });

  it('university should contain the correct properties -- language', () => {
    const university = new University();
    expect(typeof university.language !== 'undefined').toBeTruthy();
  });

  it('university should contain the correct properties -- e-mail', () => {
    const university = new University();
    expect(typeof university.email !== 'undefined').toBeTruthy();
  });

  it('university should contain the correct properties -- students', () => {
    const university = new University();
    expect(typeof university.students !== 'undefined').toBeTruthy();
  });

  it('university should contain the correct properties -- address', () => {
    const university = new University();
    expect(typeof university.address !== 'undefined').toBeTruthy();
  });

  it('university should contain the correct properties -- scholarship', () => {
    const university = new University();
    expect(typeof university.scholarship !== 'undefined').toBeTruthy();
  });

  it('variables with the correct types should be created -- id', () => {
    const university = new University();
    expect(typeof university.id).toEqual('number');
  });

  it('variables with the correct types should be created -- students', () => {
    const university = new University();
    expect(typeof university.students).toEqual('number');
  });

  it('variables with the correct types should be created -- name', () => {
    const university = new University();
    expect(typeof university.name).toEqual('string');
  });

  it('variables with the correct types should be created -- language', () => {
    const university = new University();
    expect(typeof university.language).toEqual('string');
  });

  it('variables with the correct types should be created -- e-mail', () => {
    const university = new University();
    expect(typeof university.email).toEqual('string');
  });

  it('variables with the correct types should be created -- address', () => {
    const university = new University();
    expect(typeof university.address).toEqual('string');
  });

  it('variables with the correct types should be created -- boolean', () => {
    const university = new University();
    expect(typeof university.scholarship).toEqual('boolean');
  });

});
