import { CommonModule } from '@angular/common';
import { Component, effect, OnInit, signal } from '@angular/core';
import { AppServices } from '../../../../../services/app/app-services';
import { TopMoversResponse } from '../../../../../../models/TopMoversResponse';

interface Stock {
  name: string;
  logo: string;
  price: number;
  change: number;
  volume: number;
  isHovered?: boolean;
}

@Component({
  selector: 'app-top-movers',
  imports: [CommonModule],
  templateUrl: './top-movers.html',
  styleUrl: './top-movers.css',
})
export class TopMovers implements OnInit {
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
            change: 0,
            volume: 0,
            isHovered: false,
          };
          dataArr.name = data.companyName;
          dataArr.logo = data.logoUrl;
          dataArr.price = data.ltp;
          dataArr.change = data.ltp - data.close;
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
