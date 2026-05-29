import { CommonModule } from '@angular/common';
import { Component, effect, OnInit, signal } from '@angular/core';
import { AppServices } from '../../../../../services/app/app-services';
import { TrendingSectorsData, TrendingSectorsResponse } from '../../../../../../models/TrendingSectorsResponse';

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
export class SectorTrending implements OnInit{
  sectors = signal<Sector[]>([])

  constructor(private appSer: AppServices){
    effect(()=>{
      console.log(this.sectors())
    })
  }

  // Helper methods to calculate the dynamic width of the progress bars
  getGreenWidth(gainers: number, losers: number): number {
    const total = gainers + losers;
    return total === 0 ? 50 : (gainers / total) * 100;
  }

  getRedWidth(gainers: number, losers: number): number {
    const total = gainers + losers;
    return total === 0 ? 50 : (losers / total) * 100;
  }

  ngOnInit(): void {
    this.appSer.getTrendingSectors().subscribe({
      next:(res:TrendingSectorsResponse)=>{
        console.log("Trending sectors: ",res);
        res.data.sectors.forEach((sector)=>{
          const dataArr = {
            name: '',
            icon: '',
            gainers: 0,
            losers: 0,
            priceChange: '',
            isPositive: false,
          }
          dataArr.name = sector.sectorName;
          dataArr.icon = sector.sectorLogo;
          dataArr.gainers = sector.positiveStocks;
          dataArr.losers = sector.negativeStocks;
          dataArr.priceChange = sector.dayChangePercent.toFixed(2)+'%';
          dataArr.isPositive = sector.dayChangePercent > 0 ? true : false;
          dataArr.priceChange = dataArr.isPositive ? '+' + dataArr.priceChange : dataArr.priceChange;
          this.sectors.update((data)=>[...data, dataArr]);
        })
      }
    })
  }
}
