import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Etf {
  name: string;
  logo: string;
  price: string;
  changeValue: string;
  changePercent: string;
  isPositive: boolean;
}

@Component({
  selector: 'app-etf-grow',
  imports: [CommonModule],
  templateUrl: './etf-grow.html',
  styleUrl: './etf-grow.css',
})
export class EtfGrow {
  etfs: Etf[] = [
    {
      name: 'Groww Nifty India Defence...',
      logo: 'https://assets-netstorage.groww.in/stock-assets/logos2/groww_groww.png',
      price: '₹92.28',
      changeValue: '-0.12',
      changePercent: '(0.13%)',
      isPositive: false,
    },
    {
      name: 'Groww Nifty PSU Bank ...',
      logo: 'https://assets-netstorage.groww.in/stock-assets/logos2/groww_groww.png',
      price: '₹82.50',
      changeValue: '-0.10',
      changePercent: '(0.12%)',
      isPositive: false,
    },
    {
      name: 'Groww Nifty India Railway...',
      logo: 'https://assets-netstorage.groww.in/stock-assets/logos2/groww_groww.png',
      price: '₹30.74',
      changeValue: '-0.34',
      changePercent: '(1.09%)',
      isPositive: false,
    },
    {
      name: 'Groww Nifty Private Bank...',
      logo: 'https://assets-netstorage.groww.in/stock-assets/logos2/groww_groww.png',
      price: '₹26.60',
      changeValue: '-0.28',
      changePercent: '(1.04%)',
      isPositive: false,
    },
  ];
}
