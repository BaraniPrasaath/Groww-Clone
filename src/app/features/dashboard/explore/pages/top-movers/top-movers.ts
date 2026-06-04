import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilterService } from '../../../../../core/services/app/filter-service';
import { TopMoversResponse } from '../../../../../../models/TopMoversResponse';
import { catchError, combineLatest, of, switchMap, tap } from 'rxjs';
import { TOP_MOVERS_CONFIG } from '../../../../../../models/TOP_MOVERS_CONFIG';

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
  selector: 'app-top-movers',
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './top-movers.html',
  styleUrl: './top-movers.css',
})
export class TopMovers {
  private route = inject(ActivatedRoute);
  private marketService = inject(FilterService);

  isLoading = signal<boolean>(true);
  hasError = signal<boolean>(false);

  stocks = signal<Stock[]>([]);

  private readonly EMPTY_RESPONSE: TopMoversResponse = {
    age: 0,
    cacheStatus: '',
    cacheControl: {
      maxAge: 0,
      public: false,
    },
    name: '',
    data: {
      title: '',
      stocks: [],
    },
  };

  constructor() {
    effect(() => {
      console.log('Stocks Updated:', this.stocks());
    });

    this.loadData();
  }

  private loadData(): void {
    combineLatest([this.route.paramMap, this.route.queryParamMap])
      .pipe(
        tap(() => {
          this.isLoading.set(true);
          this.hasError.set(false);
          this.stocks.set([]);
        }),

        switchMap(([params, queryParams]) => {
          const routeType = params.get('type') ?? 'top-gainers';

          const config = TOP_MOVERS_CONFIG[routeType as keyof typeof TOP_MOVERS_CONFIG];

          if (!config) {
            this.hasError.set(true);
            return of(this.EMPTY_RESPONSE);
          }

          const activeIndex = queryParams.get('index') ?? 'GIDXNIFTY100';

          return this.marketService.getTopMovers(activeIndex, config.moverType).pipe(
            catchError(() => {
              this.hasError.set(true);
              return of(this.EMPTY_RESPONSE);
            }),
          );
        }),
      )
      .subscribe({
        next: (res) => {
          const stocks = res.data.stocks.map((stock) => {
            const change = stock.ltp - stock.close;

            return {
              name: stock.companyName,
              logo: stock.logoUrl,
              price: stock.ltp,
              change: change.toFixed(2),
              changePercent: `(${Math.abs((change / stock.close) * 100).toFixed(2)}%)`,
              volume: stock.volumeWeekAvg,
              isHovered: false,
              isPositive: change >= 0,
            };
          });

          this.stocks.set(stocks);
          this.isLoading.set(false);
        },
      });
  }
}
