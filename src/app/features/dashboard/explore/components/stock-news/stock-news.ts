import { CommonModule, DatePipe } from '@angular/common';
import { Component, effect, OnInit, signal } from '@angular/core';
import { AppServices } from '../../../../../core/services/app/app-services';
import { NewsFeedResponse } from '../../../../../../models/NewsFeedResponse';
import { TimeAgoPipePipe } from '../../../../../shared/pipes/time-ago-pipe-pipe';
import { Router, RouterLink } from '@angular/router';
import { StockStore } from '../../../../../shared/services/Store/stock-store';

interface NewsStock {
  name: string;
  logo: string;
  change: string; // Used for Title
  snippet: string; // Used for Body
  time: string; // Used for publishedAt
  isPositive: boolean;
  ctaUrl: string;
}

@Component({
  selector: 'app-stock-news',
  standalone: true,
  imports: [CommonModule, TimeAgoPipePipe, RouterLink],
  templateUrl: './stock-news.html',
  styleUrl: './stock-news.css',
})
export class StockNews implements OnInit {
  newsStocks = signal<NewsStock[]>([]);

  constructor(
    private appSer: AppServices,
    private storeSer: StockStore,
    private route: Router,
  ) {
    effect(() => {
      console.log('News Signal Updated:', this.newsStocks());
    });
  }

  ngOnInit(): void {
    this.appSer.getStockNews(4).subscribe({
      next: (res: NewsFeedResponse) => {
        // Map the feed data to the local NewsStock interface
        const formattedNews: NewsStock[] = res.feed.map((post) => {
          // Get the first CTA to extract logo and stock info
          const cta = post.data.cta[0];

          return {
            name: cta?.ctaText || 'Unknown Stock',
            logo: cta?.logoUrl || '',
            change: '0.00%',
            snippet: post.data.body,
            time: post.publishedAt,
            // Logic: You can determine isPositive based on your specific requirements
            // or by checking the title/body keywords
            isPositive:
              // post.data.title.toLowerCase().includes('profit') ||
              // post.data.title.toLowerCase().includes('jump'),
              true,
            ctaUrl: cta?.ctaUrl.replace('https://groww.in/', ''),
          };
        });

        this.newsStocks.set(formattedNews);
      },
      error: (err) => {
        console.error('Error fetching stock news:', err);
      },
    });
  }

  onNewsClick(i: number) {
    const url = this.route.serializeUrl(this.route.createUrlTree([this.newsStocks()[i].ctaUrl]));

    window.open(url, '_blank');
  }
}
