import { CommonModule } from '@angular/common';
import { Component, effect, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppServices } from '../../../../../core/services/app/app-services';
import { mostBoughtStocks } from '../../../../../../models/mostBoughtStocks';

interface Stock {
  name: string;
  logo: string;
  price: string;
  change: string;
  changePercent: string;
  isPositive: boolean;
}

@Component({
  selector: 'app-most-bought-stocks',
  imports: [CommonModule, RouterLink],
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
          price: `₹${item.stats.ltp.toFixed(2)}`,
          change: item.stats.dayChange.toFixed(2),
          changePercent: `${item.stats.dayChangePerc > 0 ? item.stats.dayChangePerc.toFixed(2) : (item.stats.dayChangePerc * -1).toFixed(2)}%`,
          isPositive: item.stats.dayChange >= 0,
        }));

        this.stocks.set(stockList);
      },
      error: (err) => {
        console.error('Error fetching most bought stocks:', err);
      },
    });
  }
}
