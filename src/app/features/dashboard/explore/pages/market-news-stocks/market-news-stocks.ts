import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppServices } from '../../../../../core/services/app/app-services';
import { NewsFeedResponse } from '../../../../../../models/NewsFeedResponse';
import { TOP_MOVERS_CONFIG } from '../../../../../../models/TOP_MOVERS_CONFIG';
import { TopMoversResponse } from '../../../../../../models/TopMoversResponse';

interface NewsStock {
  name: string;
  logo: string;
  change: string; // Will display as per API or fallback
  isUp: boolean;
  isNeutral?: boolean;
  description: string;
  time: string;
}

interface SidebarStock {
  name: string;
  logo: string;
  price: number;
  change: string;
  changePercent: string;
}

@Component({
  selector: 'app-market-news-stocks',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './market-news-stocks.html',
  styleUrls: ['./market-news-stocks.css'],
})
export class MarketNewsStocks implements OnInit {
  newsStocks = signal<NewsStock[]>([]);
  topGainers = signal<SidebarStock[]>([]);
  topLosers = signal<SidebarStock[]>([]);

  constructor(private appSer: AppServices) {}

  ngOnInit(): void {
    this.appSer.getStockNews(50).subscribe({
      next: (res: NewsFeedResponse) => {
        this.mapNewsData(res);
      },
      error: (err) => {
        console.error('Error fetching news:', err);
      },
    });

    let top_gainer = TOP_MOVERS_CONFIG['top-gainers'].moverType;
    let top_loser = TOP_MOVERS_CONFIG['top-losers'].moverType;

    this.appSer.getTopMovers(top_gainer, 'GIDXNIFTY100', 4).subscribe({
      next: (res: TopMoversResponse) => {
        const stocks: SidebarStock[] = res.data.stocks.map((stock) => {
          const change = stock.ltp - stock.close;
          const changePercent = (change / stock.close) * 100;

          return {
            name: stock.companyName,
            logo: stock.logoUrl,
            price: stock.ltp,
            change: change.toFixed(2),
            changePercent: `${Math.abs(changePercent).toFixed(2)}%`,
          };
        });

        this.topGainers.set(stocks);
      },
      error: (err) => {},
    });
    this.appSer.getTopMovers(top_loser, 'GIDXNIFTY100', 4).subscribe({
      next: (res: TopMoversResponse) => {
        const stocks: SidebarStock[] = res.data.stocks.map((stock) => {
          const change = stock.ltp - stock.close;
          const changePercent = (change / stock.close) * 100;

          return {
            name: stock.companyName,
            logo: stock.logoUrl,
            price: stock.ltp,
            change: change.toFixed(2),
            changePercent: `${Math.abs(changePercent).toFixed(2)}%`,
          };
        });

        this.topLosers.set(stocks);
      },
      error: (err) => {},
    });
  }

  private mapNewsData(res: NewsFeedResponse): void {
    const mappedNews: NewsStock[] = res.feed.map((item) => ({
      name: item.data.cta[0]?.ctaText || 'Unknown',
      logo: item.data.cta[0]?.logoUrl || '',
      change: 'N/A', // API didn't provide percentage change, setting default
      isUp: true,
      description: item.data.body,
      time: this.formatRelativeTime(item.publishedAt),
    }));

    this.newsStocks.set(mappedNews);

    // Note: You can populate topGainers/topLosers here if
    // your API provides separate endpoints or data arrays
  }

  private formatRelativeTime(publishedAt: string): string {
    const now = new Date();
    const published = new Date(publishedAt);
    const diffMinutes = Math.floor((now.getTime() - published.getTime()) / 60000);
    return `${diffMinutes} minutes ago`;
  }
}
