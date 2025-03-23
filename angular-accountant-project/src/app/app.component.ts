import { Component } from '@angular/core';
import { Bill } from './model/bill';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
})
export class AppComponent {
  title = 'angular-accountant-project';

  currentBill: Bill = {
    id: 33,
    orderID: 7,
    amount: 3211,
    status: 'paid',
  };
}
