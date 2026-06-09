import { CommonModule } from '@angular/common';
import { Component, effect, OnInit, signal } from '@angular/core';
import { AppServices } from '../../../../../core/services/app/app-services';
import { EtfResponse } from '../../../../../../models/EtfResponse';

interface ETF {
  name: string;
  logo: string;
  price: string;
  change: string;
  changePercent: string;
  isUp: boolean;
  nav: string;
  navDelta: string;
  navIsUp: boolean;
  volume: string;
  oneYearReturn: string;
  returnIsUp: boolean;
  expenseRatio: string;
  aum: string;
  trackingError: string;
}

@Component({
  selector: 'app-etf-screener',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './etf-screener.html',
  styleUrl: './etf-screener.css',
})
export class EtfScreener implements OnInit {
  etfs = signal<ETF[]>([]);
  loading = signal(false);

  constructor(private appSer: AppServices) {
    effect(() => {
      console.log('ETF List:', this.etfs());
    });
  }

  ngOnInit(): void {
    this.getEtfs();
  }

  private getEtfs(): void {
    this.loading.set(true);

    this.appSer.getMostBroughtETFseeMore().subscribe({
      next: (res: EtfResponse) => {
        const etfs: ETF[] =
          res?.data?.screenerList?.map((item) => {
            const oneYearReturn = item.returns.find((r) => r.key === 'return1Y')?.value ?? 0;

            const navDelta = item.nav - item.ltp;

            return {
              name: item.companyData.shortName,
              logo: item.companyData.logoUrl,

              price: this.formatNumber(item.ltp),

              change: this.formatNumber(Math.abs(item.ltp - item.close)),

              changePercent: this.formatNumber(((item.ltp - item.close) / item.close) * 100),

              isUp: item.ltp >= item.close,

              nav: this.formatNumber(item.nav),

              navDelta: this.formatNumber(Math.abs(navDelta)),

              navIsUp: navDelta >= 0,

              volume: this.formatVolume(item.volume),

              oneYearReturn: `${this.formatNumber(oneYearReturn)}%`,

              returnIsUp: oneYearReturn >= 0,

              expenseRatio: `${item.expenseRatio}%`,

              aum: this.formatAum(item.aum),

              trackingError: item.trackingError !== null ? `${item.trackingError}%` : '--',
            };
          }) ?? [];

        console.log('data: ', etfs);
        console.log('before push: ', this.etfs());

        this.etfs.set(etfs);
        console.log('after push: ', this.etfs());
        this.loading.set(false);
      },

      error: (err) => {
        console.error('Most bought ETF error:', err);
        this.loading.set(false);
      },
    });
  }

  private formatNumber(value: number): string {
    if (value == null) {
      return '--';
    }
    return Number(value).toFixed(2);
  }

  private formatVolume(volume: number): string {
    if (volume == null) {
      return '--';
    }
    if (volume >= 10000000) {
      return `${(volume / 10000000).toFixed(2)} Cr`;
    }

    if (volume >= 100000) {
      return `${(volume / 100000).toFixed(2)} L`;
    }

    return volume.toLocaleString('en-IN');
  }

  private formatAum(aum: number): string {
    if (aum == null) {
      return '--';
    }
    return `₹${aum.toLocaleString('en-IN')} Cr`;
  }
}
