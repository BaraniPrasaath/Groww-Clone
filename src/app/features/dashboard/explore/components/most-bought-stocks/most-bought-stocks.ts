import { CommonModule } from '@angular/common';
import { Component, effect, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppServices } from '../../../../../core/services/app/app-services';
import { mostBoughtStocks } from '../../../../../../models/mostBoughtStocks';
import { NewsCard } from '../../news-card/news-card';

interface Stock {
  name: string;
  logo: string;
  price: string;
  changeValue: string;
  changePercent: string;
  isPositive: boolean;
  searchId: string;
  nseScriptCode: string;
}

@Component({
  selector: 'app-most-bought-stocks',
  imports: [CommonModule, RouterLink, NewsCard],
  templateUrl: './most-bought-stocks.html',
  styleUrl: './most-bought-stocks.css',
})
export class MostBoughtStocks implements OnInit {
  stocks = signal<Stock[]>([]);

  constructor(private appSer: AppServices) {
    effect(() => {
      console.log(this.stocks());
    });
  }

  ngOnInit(): void {
    this.appSer.getMostBoughtStocksGroww(4).subscribe({
      next: (res: mostBoughtStocks) => {
        const rawStocks = res.exploreCompanies.POPULAR_STOCKS_MOST_BOUGHT;

        const stockList: Stock[] = rawStocks.map((item) => ({
          name: item.company.companyShortName,
          logo: item.company.imageUrl,
          price: item.stats.ltp.toFixed(2),
          changeValue: item.stats.dayChange.toFixed(2),
          changePercent: `${item.stats.dayChangePerc > 0 ? item.stats.dayChangePerc.toFixed(2) : (item.stats.dayChangePerc * -1).toFixed(2)}%`,
          isPositive: item.stats.dayChange >= 0,
          searchId: item.company.searchId,
          nseScriptCode: item.company.nseScriptCode,
        }));

        this.stocks.set(stockList);
      },
      error: (err) => {
        console.error('Error fetching most bought stocks:', err);
      },
    });
  }
}
