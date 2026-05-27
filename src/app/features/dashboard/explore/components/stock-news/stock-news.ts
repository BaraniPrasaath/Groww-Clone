import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface NewsStock {
  name: string;
  logo: string;
  change: string;
  snippet: string;
  time: string;
  isPositive: boolean;
}

@Component({
  selector: 'app-stock-news',
  imports: [CommonModule],
  templateUrl: './stock-news.html',
  styleUrl: './stock-news.css',
})
export class StockNews {
  newsStocks: NewsStock[] = [
    {
      name: 'Biocon',
      logo: 'https://assets-netstorage.groww.in/stock-assets/logos2/BIOCON.webp',
      change: '-1.03%',
      snippet: 'Biocon Ltd. witnessed an NSE block trade of 402,121 shares worth Rs. 17.4 crores.',
      time: '1 hour ago',
      isPositive: false,
    },
    {
      name: 'Tata Consumer Produc',
      logo: 'https://assets-netstorage.groww.in/stock-assets/logos2/TATACONSUM.webp',
      change: '+1.52%',
      snippet: 'Tata Consumer Products shows breakout, retest, and gap-up on high volume.',
      time: '1 hour ago',
      isPositive: true,
    },
    {
      name: 'Bajaj Housing Financ',
      logo: 'https://assets-netstorage.groww.in/stock-assets/logos2/BAJAJHFL.webp',
      change: '+1.12%',
      snippet: 'Bajaj Housing Finance Ltd has allotted 2 lakh secured NCDs at Rs. 1 lakh each.',
      time: '1 hour ago',
      isPositive: true,
    },
    {
      name: 'HDFC Bank',
      logo: 'https://assets-netstorage.groww.in/stock-assets/logos2/HDFCBANK.webp',
      change: '-2.36%',
      snippet: 'HDFC Bank contributes to market pressure as Nifty nears 24,000.',
      time: '1 hour ago',
      isPositive: false,
    },
  ];
}
