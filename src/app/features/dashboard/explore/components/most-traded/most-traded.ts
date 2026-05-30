import { CommonModule } from '@angular/common';
import { Component, effect, OnInit, signal } from '@angular/core';
import { AppServices } from '../../../../../services/app/app-services';
import { RouterLink } from '@angular/router';

interface Stock {
  name: string;
  logo: string;
  price: number;
  changeValue: string;
  changePercent: string;
  isPositive: boolean;
}

@Component({
  selector: 'app-most-traded',
  imports: [CommonModule, RouterLink],
  templateUrl: './most-traded.html',
  styleUrl: './most-traded.css',
})
export class MostTraded implements OnInit {
  stocks = signal<Stock[]>([]);

  constructor(private appSer: AppServices) {
    effect(() => {
      console.log(this.stocks());
    });
  }

  ngOnInit(): void {
    this.appSer.getMostTraded().subscribe({
      next: (res) => {
        console.log('Most traded response: ', res);
        res.exploreCompanies.POPULAR_STOCKS_MOST_BOUGHT_MTF.forEach((data) => {
          const dataArr = {
            name: '',
            logo: '',
            price: 0,
            changeValue: '',
            changePercent: '',
            isPositive: false,
          };
          dataArr.name = data.company.companyShortName;
          dataArr.logo = data.company.imageUrl;
          dataArr.price = data.stats.ltp;
          const changeValue = data.stats.ltp - data.stats.close;
          dataArr.changeValue = changeValue.toFixed(2);
          dataArr.changePercent =
            changeValue > 0
              ? '(' +
                (((data.stats.ltp - data.stats.close) / data.stats.close) * 100).toFixed(2) +
                '%)'
              : '(' +
                (((data.stats.ltp - data.stats.close) / data.stats.close) * 100 * -1).toFixed(2) +
                '%)';
          dataArr.isPositive = changeValue > 0 ? true : false;
          this.stocks.update((stock) => [...stock, dataArr]);
        });
      },
      error: (err) => {
        console.log('Most traded error: ', err);
      },
    });
  }
}
