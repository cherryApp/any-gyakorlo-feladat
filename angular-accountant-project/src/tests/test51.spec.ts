import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Bill } from 'src/app/model/bill';

import { BillEditorComponent } from '../app/common/bill-editor/bill-editor.component';

const mockBill: Bill = {
  id: 11,
  orderID: 5,
  amount: 1000,
  status: 'new',
};

describe('BillEditorComponent', () => {
  let component: BillEditorComponent;
  let fixture: ComponentFixture<BillEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillEditorComponent ],
      imports: [
        FormsModule,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BillEditorComponent);
    component = fixture.componentInstance;
    component.bill = mockBill;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should exist', async () => {
    fixture.detectChanges();
    await fixture.whenStable();

    const form = fixture.debugElement.nativeElement.querySelector('form');
    expect(form).toBeTruthy();
  });

  it('hidden input for id should exist', async () => {
    fixture.detectChanges();
    await fixture.whenStable();

    const input = fixture.debugElement.nativeElement.querySelector(
      'form input[type=hidden]'
    );
    expect(input).toBeTruthy();
  });

  it('select for orderID should exist', async () => {
    fixture.detectChanges();
    await fixture.whenStable();

    const input = fixture.debugElement.nativeElement.querySelector(
      'select[name=orderID]'
    );
    expect(input).toBeTruthy();
  });

  it('minimum value of orderID should be 1', async () => {
    fixture.detectChanges();
    await fixture.whenStable();

    const minOption = fixture.debugElement.nativeElement.querySelector(
      'select[name=orderID] option'
    );
    expect(minOption.value).toBe('1');
  });

  it('maximum value of orderID should be 10', async () => {
    fixture.detectChanges();
    await fixture.whenStable();

    const minOption = fixture.debugElement.nativeElement.querySelector(
      'select[name=orderID] option:last-child'
    );
    expect(minOption.value).toBe('10');
  });

  it('input for amount should exist', async () => {
    fixture.detectChanges();
    await fixture.whenStable();

    const input = fixture.debugElement.nativeElement.querySelector(
      'input[name=amount][type=number]'
    );
    expect(input).toBeTruthy();
  });

  it('select for status should exist', async () => {
    fixture.detectChanges();
    await fixture.whenStable();

    const input = fixture.debugElement.nativeElement.querySelector(
      'select[name=status]'
    );
    expect(input).toBeTruthy();
  });

  it('selectable statuses should be new|paid|shipped', async () => {
    fixture.detectChanges();
    await fixture.whenStable();

    const options: HTMLOptionElement[] = fixture.debugElement.nativeElement.querySelectorAll(
      'select[name=status] option'
    );
    const statuses: string[] = Array.from(options || []).map( (o: HTMLOptionElement) => o.value );
    expect(
      statuses.includes('new') &&
      statuses.includes('paid') &&
      statuses.includes('shipped')
    ).toBeTruthy();
  });

});
