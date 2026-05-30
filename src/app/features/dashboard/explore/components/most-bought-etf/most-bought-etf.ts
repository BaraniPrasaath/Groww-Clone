import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, effect, OnInit, signal } from '@angular/core';
import { AppServices } from '../../../../../services/app/app-services';
import { ObservableNotification } from 'rxjs';
import { ExploreCompanies } from '../../../../../../models/ExploreCompaniesResponse';
import { ExploreCompaniesResponse_etf } from '../../../../../../models/ExploreCompaniesResponse_etf';
import { RouterLink } from '@angular/router';

interface ETF {
  category: string;
  name: string;
  logo: string;
  price: string;
  changeValue: string;
  changePercent: string;
  isPositive: boolean;
}

@Component({
  selector: 'app-most-bought-etf',
  imports: [CommonModule, CurrencyPipe, RouterLink],
  templateUrl: './most-bought-etf.html',
  styleUrl: './most-bought-etf.css',
})
export class MostBoughtEtf implements OnInit {
  etfs = signal<ETF[]>([]);

  constructor(private appSer: AppServices) {
    effect(() => {
      console.log(this.etfs());
    });
  }

  ngOnInit(): void {
    this.appSer.getMostBroughtETF().subscribe({
      next: (res: ExploreCompaniesResponse_etf) => {
        console.log('Most brought eft: ', res);
        // Define the desired display order
        const CATEGORY_ORDER = [
          'POPULAR_STOCKS_MOST_BOUGHT_ETF_GOLD',
          'POPULAR_STOCKS_MOST_BOUGHT_ETF_SILVER',
          'POPULAR_STOCKS_MOST_BOUGHT_ETF_INTERNATIONAL',
          'POPULAR_STOCKS_MOST_BOUGHT_ETF_NIFTY_FIFTY',
        ];

        // Inside your data processing function:
        const transformedData: ETF[] = [];

        // Loop through your defined order, not the API object
        CATEGORY_ORDER.forEach((key) => {
          const companies = res.exploreCompanies[key];

          if (companies) {
            companies.forEach((item) => {
              const changeValue = item.stats.dayChange;
              transformedData.push({
                // Strip the "POPULAR_STOCKS_MOST_BOUGHT_ETF_" prefix for a cleaner UI category name
                category: key.replace('POPULAR_STOCKS_MOST_BOUGHT_ETF_', ''),
                name: item.company.companyName,
                logo: item.company.imageUrl,
                price: item.stats.ltp.toFixed(2),
                changeValue: item.stats.dayChange.toFixed(2),
                changePercent:
                  changeValue > 0
                    ? '(' + item.stats.dayChangePerc.toFixed(2) + '%)'
                    : '(' + (item.stats.dayChangePerc * -1).toFixed(2) + '%)',
                isPositive: item.stats.dayChange >= 0,
              });
            });
          }
        });

        this.etfs.set(transformedData);
      },
    });
  }
}
