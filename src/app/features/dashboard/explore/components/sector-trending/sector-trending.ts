import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Sector {
  name: string;
  icon: string;
  gainers: number;
  losers: number;
  priceChange: string;
  isPositive: boolean;
}

@Component({
  selector: 'app-sector-trending',
  imports: [CommonModule],
  templateUrl: './sector-trending.html',
  styleUrl: './sector-trending.css',
})
export class SectorTrending {
  sectors: Sector[] = [
    {
      name: 'Batteries',
      icon: 'https://assets-netstorage.groww.in/stock-assets/sectors-logo/light/industry_24_light.png',
      gainers: 7,
      losers: 1,
      priceChange: '+4.60%',
      isPositive: true,
    },
    {
      name: 'Electrical Equipment',
      icon: 'https://assets-netstorage.groww.in/stock-assets/sectors-logo/light/industry_31_light.png',
      gainers: 66,
      losers: 41,
      priceChange: '+2.56%',
      isPositive: true,
    },
    {
      name: 'Media & Entertainment',
      icon: 'https://assets-netstorage.groww.in/stock-assets/sectors-logo/light/industry_47_light.png',
      gainers: 72,
      losers: 54,
      priceChange: '+2.11%',
      isPositive: true,
    },
    {
      name: 'Railways',
      icon: 'https://assets-netstorage.groww.in/stock-assets/sectors-logo/light/industry_56_light.png',
      gainers: 7,
      losers: 4,
      priceChange: '-1.93%',
      isPositive: false,
    },
    {
      name: 'Insurance',
      icon: 'https://assets-netstorage.groww.in/stock-assets/sectors-logo/light/industry_19_light.png',
      gainers: 3,
      losers: 12,
      priceChange: '-1.97%',
      isPositive: false,
    },
    {
      name: 'Auto Retail',
      icon: 'https://assets-netstorage.groww.in/stock-assets/sectors-logo/light/industry_3_light.png',
      gainers: 2,
      losers: 3,
      priceChange: '-3.66%',
      isPositive: false,
    },
  ];

  // Helper methods to calculate the dynamic width of the progress bars
  getGreenWidth(gainers: number, losers: number): number {
    const total = gainers + losers;
    return total === 0 ? 50 : (gainers / total) * 100;
  }

  getRedWidth(gainers: number, losers: number): number {
    const total = gainers + losers;
    return total === 0 ? 50 : (losers / total) * 100;
  }
}
