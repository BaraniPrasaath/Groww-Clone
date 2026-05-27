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
  selector: 'app-top-intrady',
  imports: [CommonModule],
  templateUrl: './top-intrady.html',
  styleUrl: './top-intrady.css',
})
export class TopIntrady implements OnInit {
  stocks = signal<Stock[]>([]);

  constructor(private appSer: AppServices) {
    effect(() => {
      console.log(this.stocks());
    });
  }

  ngOnInit(): void {
    this.appSer.getTopIntrady().subscribe({
      next: (res) => {
        console.log('Top Intrady response: ', res);
        res.exploreCompanies.POPULAR_STOCKS_INTRADAY_VOLUME.forEach((data) => {
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
        console.log('Top Intrady error: ', err);
      },
    });
  }
}
