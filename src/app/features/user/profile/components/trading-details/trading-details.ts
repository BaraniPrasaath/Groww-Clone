import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-trading-details',
  imports: [CommonModule],
  templateUrl: './trading-details.html',
  styleUrl: './trading-details.css',
})
export class TradingDetails {
  segments = [
    { name: 'NSE equity', checked: true },
    { name: 'BSE equity', checked: true },
    { name: 'Mutual funds', checked: true },
    { name: 'Futures and Options', checked: true },
  ];

  details = {
    ucc: '6584030538',
    boid: '-',
    dpId: '-',
    depositoryParticipant: 'Groww Invest Tech Pvt. Ltd.',
    depositoryName: 'CDSL',
  };

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text);
  }
}
