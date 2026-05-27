import { CommonModule } from '@angular/common';
import { Component, effect, OnInit, signal } from '@angular/core';
import { AppServices } from '../../../../../services/app/app-services';

interface Stock {
  name: string;
  logo: string;
  price: number;
  changeValue: number;
  changePercent: number;
  isPositive: boolean;
}

@Component({
  selector: 'app-most-traded',
  imports: [CommonModule],
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
            changeValue: 0,
            changePercent: 0,
            isPositive: false,
          };
          dataArr.name = data.company.companyShortName;
          dataArr.logo = data.company.imageUrl;
          dataArr.price = data.stats.ltp;
          dataArr.changeValue = data.stats.ltp - data.stats.close;
          dataArr.changePercent = ((data.stats.ltp - data.stats.close) / data.stats.close) * 100;
          dataArr.isPositive = dataArr.changeValue > 0 ? true : false;
          this.stocks.update((stock) => [...stock, dataArr]);
        });
      },
      error: (err) => {
        console.log('Most traded error: ', err);
      },
    });
  }
}
