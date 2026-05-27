import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Stock {
  name: string;
  logo: string;
  price: string;
  changeValue: string;
  changePercent: string;
  isPositive: boolean;
}

@Component({
  selector: 'app-most-traded',
  imports: [CommonModule],
  templateUrl: './most-traded.html',
  styleUrl: './most-traded.css',
})
export class MostTraded {
  stocks: Stock[] = [
    {
      name: 'MCX',
      logo: 'https://assets-netstorage.groww.in/stock-assets/logos2/MCX_1.webp',
      price: '₹3,209.00',
      changeValue: '-98.30',
      changePercent: '(2.97%)',
      isPositive: false,
    },
    {
      name: 'HDFC Bank',
      logo: 'https://assets-netstorage.groww.in/stock-assets/logos2/HDFCBANK.webp',
      price: '₹759.80',
      changeValue: '-19.10',
      changePercent: '(2.45%)',
      isPositive: false,
    },
    {
      name: 'Zee Entertainment',
      logo: 'https://assets-netstorage.groww.in/stock-assets/logos2/ZEEL_2.webp',
      price: '₹92.50',
      changeValue: '9.72',
      changePercent: '(11.74%)',
      isPositive: true,
    },
    {
      name: 'Adani Power',
      logo: 'https://assets-netstorage.groww.in/stock-assets/logos2/ADANIPOWER.webp',
      price: '₹246.86',
      changeValue: '2.33',
      changePercent: '(0.95%)',
      isPositive: true,
    },
  ];
}
