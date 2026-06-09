import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, effect, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { AppServices } from '../../../../../core/services/app/app-services';
import { TopMoversResponse } from '../../../../../../models/TopMoversResponse';
import { StockStore } from '../../../../../shared/services/Store/stock-store';

interface Stock {
  name: string;
  logo: string;
  price: string;
  change: string;
  changePercent: string;
  volume: number;
  isHovered?: boolean;
  isPositive: boolean;
  searchId: string;
  nseScriptCode: string;
}

interface IndexOption {
  label: string;
  value: string;
}

@Component({
  selector: 'app-top-movers',
  imports: [CommonModule, CurrencyPipe, RouterLink],
  templateUrl: './top-movers.html',
  styleUrl: './top-movers.css',
})
export class TopMovers {
  constructor(
    private appSer: AppServices,
    private storeSer: StockStore,
    private route: Router,
  ) {
    effect(() => {
      this.loadStocks(this.selectedMover(), this.selectedIndex());
    });
  }

  // ----------------------------
  // Signals
  // ----------------------------

  stocks = signal<Stock[]>([]);

  selectedMover = signal('TOP_GAINERS');
  selectedIndex = signal('GIDXNIFTY100');

  isDropdownOpen = signal(false);

  // ----------------------------
  // UI Data
  // ----------------------------

  movers = [
    { label: 'Gainers', value: 'TOP_GAINERS' },
    { label: 'Losers', value: 'TOP_LOSERS' },
    { label: 'Volume shockers', value: 'VOLUME_SHOCKERS' },
  ];

  indexOptions: IndexOption[] = [
    { label: 'NIFTY 100', value: 'GIDXNIFTY100' },
    { label: 'NIFTY 500', value: 'GIDXNIFTY500' },
    { label: 'NIFTY Midcap 100', value: 'GIDXNIFMDCP100' },
    { label: 'NIFTY Smallcap 100', value: 'GIDXNIFSMCP100' },
    { label: 'Nifty Total Market', value: 'GIDXNIFTYTOTALMCAP' },
  ];

  // ----------------------------
  // API
  // ----------------------------

  private loadStocks(moverType: string, index: string): void {
    console.log('Fetching:', moverType, index);

    this.stocks.set([]);

    this.appSer.getTopMovers(moverType, index, 6).subscribe({
      next: (res: TopMoversResponse) => {
        const stocks: Stock[] = res.data.stocks.map((stock) => {
          const change = stock.ltp - stock.close;
          const changePercent = (change / stock.close) * 100;

          return {
            name: stock.companyName,
            logo: stock.logoUrl,
            price: stock.ltp.toFixed(2),
            change: change.toFixed(2),
            changePercent: `(${Math.abs(changePercent).toFixed(2)}%)`,
            volume: stock.volumeWeekAvg,
            isHovered: false,
            isPositive: change >= 0,
            searchId: stock.searchId,
            nseScriptCode: stock.nseScriptCode,
          };
        });

        this.stocks.set(stocks);
      },

      error: (err) => {
        console.error('Top Movers Error:', err);
      },
    });
  }

  // ----------------------------
  // Events
  // ----------------------------

  onClick(type: string): void {
    this.selectedMover.set(type);
  }

  toggleDropdown(): void {
    this.isDropdownOpen.update((value) => !value);
  }

  selectIndex(value: string): void {
    this.selectedIndex.set(value);
    this.isDropdownOpen.set(false);
  }

  getSelectedIndexLabel(): string {
    return (
      this.indexOptions.find((option) => option.value === this.selectedIndex())?.label ??
      'Select Index'
    );
  }

  onClickTab(i: number) {
    this.storeSer.setStocks(this.stocks()[i]);
    this.route.navigate(['/stocks', this.stocks()[i].searchId]);
  }
}
