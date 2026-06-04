import { Component } from '@angular/core';

@Component({
  selector: 'app-trading-apis',
  imports: [],
  templateUrl: './trading-apis.html',
  styleUrl: './trading-apis.css',
})
export class TradingApis {
  redirectToCloud(): void {
    console.log('Clicked');
  }
}
