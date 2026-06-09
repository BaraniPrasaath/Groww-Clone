import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, effect, OnInit, signal } from '@angular/core';
import { AppServices } from '../../../../../core/services/app/app-services';
import { RouterLink } from '@angular/router';
import { NewsCard } from '../../news-card/news-card';

interface Stock {
  name: string;
  logo: string;
  price: number;
  changeValue: string;
  changePercent: string;
  isPositive: boolean;
  searchId: string;
  nseScriptCode: string;
}

@Component({
  selector: 'app-top-intrady',
  imports: [CommonModule, RouterLink, NewsCard],
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
    this.appSer.getTopIntrady(4).subscribe({
      next: (res) => {
        console.log('Top Intrady response: ', res);
        res.exploreCompanies.POPULAR_STOCKS_INTRADAY_VOLUME.forEach((data) => {
          const dataArr = {
            name: '',
            logo: '',
            price: 0,
            changeValue: '',
            changePercent: '',
            isPositive: false,
            searchId: '',
            nseScriptCode: '',
          };
          dataArr.name = data.company.companyShortName;
          dataArr.logo = data.company.imageUrl;
          dataArr.price = data.stats.ltp;
          const changeValue = data.stats.ltp - data.stats.close;
          dataArr.changeValue = changeValue.toFixed(2);
          const changePercent = ((data.stats.ltp - data.stats.close) / data.stats.close) * 100;
          dataArr.changePercent =
            changeValue > 0
              ? changePercent.toFixed(2) + '%'
              : (changePercent * -1).toFixed(2) + '%';
          dataArr.isPositive = changeValue > 0 ? true : false;
          dataArr.searchId = data.company.searchId;
          dataArr.nseScriptCode = data.company.nseScriptCode;
          this.stocks.update((stock) => [...stock, dataArr]);
        });
      },
      error: (err) => {
        console.log('Top Intrady error: ', err);
      },
    });
  }
}
