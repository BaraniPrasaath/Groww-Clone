import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface RecentStock {
  symbol: string;
  logo: string;
  change: string;
  isPositive: boolean;
}

@Component({
  selector: 'app-recently-viewed',
  imports: [CommonModule],
  templateUrl: './recently-viewed.html',
  styleUrl: './recently-viewed.css',
})
export class RecentlyViewed {
  recentStocks: RecentStock[] = [
    {
      symbol: 'HDFCBANK',
      logo: 'https://assets-netstorage.groww.in/stock-assets/logos2/HDFCBANK.webp',
      change: '-2.70%',
      isPositive: false,
    },
    {
      symbol: 'ADANIENSOL',
      logo: 'https://assets-netstorage.groww.in/stock-assets/logos2/ADANIENSOL.webp',
      change: '+5.09%',
      isPositive: true,
    },
    {
      symbol: 'ENRIN',
      logo: 'https://assets-netstorage.groww.in/stock-assets/logos2/ENRIN.webp',
      change: '+8.47%',
      isPositive: true,
    },
    {
      symbol: 'ITC',
      logo: 'https://assets-netstorage.groww.in/stock-assets/logos2/ITC_1.webp',
      change: '-0.60%',
      isPositive: false,
    },
    {
      symbol: 'TRISHAKT',
      logo: 'https://assets-netstorage.groww.in/stock-assets/logos2/TrishaktiElectronicsIndustries_12352452_6237.png',
      change: '+2.11%',
      isPositive: true,
    },
  ];
}
