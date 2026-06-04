import { Component } from '@angular/core';

interface ReportCategory {
  title: string;
  iconType: 'pnl' | 'tax' | 'holdings' | 'transactions';
  items: string[];
}

@Component({
  selector: 'app-reports',
  imports: [],
  templateUrl: './reports.html',
  styleUrl: './reports.css',
})
export class Reports {
  categories: ReportCategory[] = [
    {
      title: 'Profit & Loss',
      iconType: 'pnl',
      items: ['Stocks P&L', 'Dividend report'],
    },
    {
      title: 'Tax',
      iconType: 'tax',
      items: [
        'Mutual Funds - ELSS statement',
        'Mutual Funds - Capital gains',
        'Stocks - Capital gains',
        'F&O - Tax report',
        'Commodities - Tax report',
        'GST Invoice',
      ],
    },
    {
      title: 'Holdings',
      iconType: 'holdings',
      items: ['Mutual Funds - Holdings statement', 'Stocks - Holdings statement', 'Demat report'],
    },
    {
      title: 'Transactions',
      iconType: 'transactions',
      items: [
        'Mutual Funds - Order history',
        'Stocks - Order history',
        'Groww Balance statement',
        'Contract note',
      ],
    },
  ];
}
