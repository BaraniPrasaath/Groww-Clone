import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Stock {
  name: string;
  logo: string;
  price: string;
  change: string;
  percentage: string;
}

@Component({
  selector: 'app-most-bought-stocks',
  imports: [CommonModule, RouterLink],
  templateUrl: './most-bought-stocks.html',
  styleUrl: './most-bought-stocks.css',
})
export class MostBoughtStocks {
  stocks: Stock[] = [
    {
      name: 'Apollo Micro Systems',
      logo: 'https://assets-netstorage.groww.in/stock-assets/logos2/AMS_BANSAL1.webp',
      price: '₹422.70',
      change: '10.60',
      percentage: '2.57%',
    },
    {
      name: 'Adani Total Gas',
      logo: 'https://assets-netstorage.groww.in/stock-assets/logos2/ATGL.webp',
      price: '₹780.90',
      change: '67.80',
      percentage: '9.51%',
    },
    {
      name: 'Adani Power',
      logo: 'https://assets-netstorage.groww.in/stock-assets/logos2/ADANIPOWER.webp',
      price: '₹249.72',
      change: '5.19',
      percentage: '2.12%',
    },
    {
      name: 'ITC',
      logo: 'https://assets-netstorage.groww.in/stock-assets/logos2/ITC_1.webp',
      price: '₹293.80',
      change: '0.15',
      percentage: '0.05%',
    },
  ];
}
