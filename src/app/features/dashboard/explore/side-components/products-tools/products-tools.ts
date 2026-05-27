import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ProductItem {
  name: string;
  icon: string;
  badge?: string;
}

@Component({
  selector: 'app-products-tools',
  imports: [CommonModule],
  templateUrl: './products-tools.html',
  styleUrl: './products-tools.css',
})
export class ProductsTools {
  items: ProductItem[] = [
    {
      name: 'IPO',
      icon: 'https://storage.googleapis.com/groww-assets/web-assets/img/stock/mint_ipo_light.svg',
      badge: '4 open',
    },
    {
      name: 'Bonds',
      icon: 'https://storage.googleapis.com/groww-assets/web-assets/img/stock/bond_mint_light.svg',
    },
    {
      name: 'ETFs',
      icon: 'https://storage.googleapis.com/groww-static-content/web-assets/img/stock/mint_etf_light.webp',
    },
    {
      name: 'Intraday Screener',
      icon: 'https://storage.googleapis.com/groww-assets/web-assets/img/stock/mint_intraday_light.svg',
    },
    {
      name: 'Stocks SIP',
      icon: 'https://resources.groww.in/web-assets/img/stock/stocks_sip_light.svg',
    },
    {
      name: 'MTF stocks',
      icon: 'https://storage.googleapis.com/groww-assets/web-assets/img/stock/mtf_mint_light.svg',
    },
    {
      name: 'Events calendar',
      icon: 'https://storage.googleapis.com/groww-assets/web-assets/img/stock/mint_event_light.svg',
    },
    {
      name: 'All Stocks screener',
      icon: 'https://storage.googleapis.com/groww-assets/web-assets/img/stock/mint_screener_light.svg',
    },
  ];
}
