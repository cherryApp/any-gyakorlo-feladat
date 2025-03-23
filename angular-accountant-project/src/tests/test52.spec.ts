import { EventEmitter } from '@angular/core';
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
    component.bill = {...mockBill};
    fixture.detectChanges();
  });

  it('startUpdate event should exist', async () => {
    fixture.detectChanges();
    await fixture.whenStable();

    expect(component.startUpdate instanceof EventEmitter).toBeTruthy();
  });

  it('amount input should be \'required\'', async () => {
    fixture.detectChanges();
    await fixture.whenStable();

    const amountInput = fixture.debugElement.nativeElement.querySelector(
      'form input[name=amount][required]'
    );

    expect(amountInput).toBeTruthy();
  });

  it('form with a too low amount should be disabled', async () => {
    fixture.detectChanges();
    await fixture.whenStable();

    const amountInput = fixture.debugElement.nativeElement.querySelector(
      'form input[name=amount]'
    );
    amountInput.value = 0;
    amountInput.dispatchEvent( new Event('input') );
    fixture.detectChanges();
    await fixture.whenStable();

    const sendButton = fixture.debugElement.nativeElement.querySelector(
      'form button'
    );

    expect(sendButton.disabled).toBeTruthy();
  });

  it('form with a too high amount should be disabled', async () => {
    fixture.detectChanges();
    await fixture.whenStable();

    const amountInput = fixture.debugElement.nativeElement.querySelector(
      'form input[name=amount]'
    );
    amountInput.value = 10001;
    amountInput.dispatchEvent( new Event('input') );
    fixture.detectChanges();
    await fixture.whenStable();

    const sendButton = fixture.debugElement.nativeElement.querySelector(
      'form button'
    );

    expect(sendButton.disabled).toBeTruthy();
  });

  it('form with a correct amount should be enabled', async () => {
    fixture.detectChanges();
    await fixture.whenStable();

    const amountInput = fixture.debugElement.nativeElement.querySelector(
      'form input[name=amount]'
    );
    amountInput.value = 2500;
    amountInput.dispatchEvent( new Event('input') );
    fixture.detectChanges();
    await fixture.whenStable();

    const sendButton = fixture.debugElement.nativeElement.querySelector(
      'form button'
    );

    expect(sendButton.disabled).toBeFalsy();
  });

  it('onUpdate and startUpdate.emit should be called', async () => {
    fixture.detectChanges();
    await fixture.whenStable();

    const onUpdateSpy = jest.spyOn<BillEditorComponent, any>(component, 'onUpdate');
    const emitSpy = jest.spyOn<EventEmitter<Bill>, any>(component.startUpdate, 'emit');

    const inputs = fixture.debugElement.nativeElement.querySelector(
      'form select[name=orderID], form input[name=amount], form select[name=status]'
    );
    inputs[0].value = 1;
    inputs[0].dispatchEvent( new Event('input') );
    inputs[1].value = 1500;
    inputs[1].dispatchEvent( new Event('input') );
    inputs[2].value = 'paid';
    inputs[2].dispatchEvent( new Event('input') );

    fixture.detectChanges();
    await fixture.whenStable();

    const sendButton = fixture.debugElement.nativeElement.querySelector(
      'form button'
    );
    sendButton.click();

    fixture.detectChanges();
    await fixture.whenStable();

    expect(onUpdateSpy).toHaveBeenCalledWith(mockBill);
    expect(emitSpy).toHaveBeenCalledWith(mockBill);
  });



});
