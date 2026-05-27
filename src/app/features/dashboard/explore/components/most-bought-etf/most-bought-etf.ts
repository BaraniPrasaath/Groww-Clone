import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ETF {
  category: string;
  name: string;
  logo: string;
  price: string;
  changeValue: string;
  changePercent: string;
  isPositive: boolean;
}

@Component({
  selector: 'app-most-bought-etf',
  imports: [CommonModule],
  templateUrl: './most-bought-etf.html',
  styleUrl: './most-bought-etf.css',
})
export class MostBoughtEtf {
  etfs: ETF[] = [
    {
      category: 'GOLD',
      name: 'Tata Gold Exchange Trade...',
      logo: 'https://assets-netstorage.groww.in/stock-assets/logos2/tata_groww.png',
      price: '₹15.14',
      changeValue: '-0.07',
      changePercent: '(0.46%)',
      isPositive: false,
    },
    {
      category: 'SILVER',
      name: 'Nippon India Silver ETF',
      logo: 'https://assets-netstorage.groww.in/stock-assets/logos2/nippon_groww.png',
      price: '₹250.04',
      changeValue: '-1.25',
      changePercent: '(0.50%)',
      isPositive: false,
    },
    {
      category: 'INTERNATIONAL',
      name: 'Motilal Oswal MOSt Shares...',
      logo: 'https://assets-netstorage.groww.in/stock-assets/logos2/motilal_groww.png',
      price: '₹328.74',
      changeValue: '-1.60',
      changePercent: '(0.48%)',
      isPositive: false,
    },
    {
      category: 'NIFTY 50',
      name: 'Nippon India ETF Nifty 50 BeES',
      logo: 'https://assets-netstorage.groww.in/stock-assets/logos2/nippon_groww.png',
      price: '₹270.72',
      changeValue: '-0.11',
      changePercent: '(0.04%)',
      isPositive: false,
    },
  ];
}
