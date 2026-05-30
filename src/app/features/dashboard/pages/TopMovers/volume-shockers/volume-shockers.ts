import { Component, effect, OnInit, signal } from '@angular/core';
import { AppServices } from '../../../../../services/app/app-services';
import { TopMoversResponse } from '../../../../../../models/TopMoversResponse';
import { CommonModule, CurrencyPipe } from '@angular/common';

interface Stock {
  name: string;
  logo: string;
  price: number;
  change: string;
  changePercent: string;
  volume: number;
  isHovered?: boolean;
  isPositive: boolean;
}

@Component({
  selector: 'app-volume-shockers',
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './volume-shockers.html',
  styleUrl: './volume-shockers.css',
})
export class VolumeShockers implements OnInit {
  stocks = signal<Stock[]>([]);

  constructor(private appSer: AppServices) {
    effect(() => {
      console.log(this.stocks());
    });
  }

  ngOnInit(): void {
    this.appSer.getTopMovers().subscribe({
      next: (res: TopMoversResponse) => {
        console.log('Top Movers response: ', res);
        res.data.stocks.forEach((data) => {
          const dataArr = {
            name: '',
            logo: '',
            price: 0,
            change: '',
            changePercent: '',
            volume: 0,
            isHovered: false,
            isPositive: false,
          };
          dataArr.name = data.companyName;
          dataArr.logo = data.logoUrl;
          dataArr.price = data.ltp;
          dataArr.change = (data.ltp - data.close).toFixed(2);
          const change = data.ltp - data.close;
          dataArr.changePercent =
            change > 0
              ? '(' + (((data.ltp - data.close) / data.close) * 100).toFixed(2) + '%)'
              : '(' + (((data.ltp - data.close) / data.close) * 100 * -1).toFixed(2) + '%)';
          dataArr.volume = data.volumeWeekAvg;
          this.stocks.update((stock) => [...stock, dataArr]);
        });
      },
      error: (err) => {
        console.log('Top movers error: ', err);
      },
    });
  }
}
