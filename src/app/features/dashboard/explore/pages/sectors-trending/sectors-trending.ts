import { CommonModule } from '@angular/common';
import { Component, effect, OnInit, signal } from '@angular/core';
import { AppServices } from '../../../../../core/services/app/app-services';
import { TrendingSectorsResponse } from '../../../../../../models/TrendingSectorsResponse';

interface Sector {
  name: string;
  icon: string; // Using Unicode emojis for icons as placeholders
  gainers: number;
  losers: number;
  priceChange: string;
  isPositive:boolean;
}

@Component({
  selector: 'app-sectors-trending',
  imports: [CommonModule],
  templateUrl: './sectors-trending.html',
  styleUrl: './sectors-trending.css',
})
export class SectorsTrending implements OnInit {
  sectors = signal<Sector[]>([]);

  constructor(private appSer: AppServices) {
    effect(() => {
      console.log(this.sectors());
    });
  }

  ngOnInit(): void {
    this.appSer.getTrendingSectors(100).subscribe({
      next: (res: TrendingSectorsResponse) => {
        console.log('Trending sectors: ', res);
        res.data.sectors.forEach((sector) => {
          const dataArr = {
            name: '',
            icon: '',
            gainers: 0,
            losers: 0,
            priceChange: '',
            isPositive: false,
          };
          dataArr.name = sector.sectorName;
          dataArr.icon = sector.sectorLogo;
          dataArr.gainers = sector.positiveStocks;
          dataArr.losers = sector.negativeStocks;
          dataArr.priceChange = sector.dayChangePercent.toFixed(2) + '%';
          dataArr.isPositive = sector.dayChangePercent > 0 ? true : false;
          dataArr.priceChange = dataArr.isPositive
            ? '+' + dataArr.priceChange
            : dataArr.priceChange;
          this.sectors.update((data) => [...data, dataArr]);
        });
      },
    });
  }

  // Helper to calculate percentage for the bar width
  getBarWidth(gainers: number, losers: number) {
    const total = gainers + losers;
    return (gainers / total) * 100;
  }
}
