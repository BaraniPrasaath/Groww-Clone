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
  selector: 'app-top-intrady',
  imports: [CommonModule],
  templateUrl: './top-intrady.html',
  styleUrl: './top-intrady.css',
})
export class TopIntrady {
  stocks: Stock[] = [
    {
      name: 'Apollo Micro Systems',
      logo: 'https://assets-netstorage.groww.in/stock-assets/logos2/AMS_BANSAL1.webp',
      price: '₹418.05',
      changeValue: '5.95',
      changePercent: '(1.44%)',
      isPositive: true,
    },
    {
      name: 'Adani Total Gas',
      logo: 'https://assets-netstorage.groww.in/stock-assets/logos2/ATGL.webp',
      price: '₹774.10',
      changeValue: '61.00',
      changePercent: '(8.55%)',
      isPositive: true,
    },
    {
      name: 'Adani Power',
      logo: 'https://assets-netstorage.groww.in/stock-assets/logos2/ATGL.webp',
      price: '₹247.70',
      changeValue: '3.17',
      changePercent: '(1.30%)',
      isPositive: true,
    },
    {
      name: 'MTAR Technologies',
      logo: 'https://assets-netstorage.groww.in/stock-assets/logos2/MTARTECH.webp',
      price: '₹7,801.50',
      changeValue: '-76.50',
      changePercent: '(0.97%)',
      isPositive: false,
    },
  ];
}
