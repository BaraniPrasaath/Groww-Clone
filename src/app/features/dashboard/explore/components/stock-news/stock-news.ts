import { CommonModule, DatePipe } from '@angular/common';
import { Component, effect, OnInit, signal } from '@angular/core';
import { AppServices } from '../../../../../services/app/app-services';
import { NewsFeedResponse } from '../../../../../../models/NewsFeedResponse';
import { TimeAgoPipePipe } from '../../../../../shared/pipes/time-ago-pipe-pipe';

interface NewsStock {
  name: string;
  logo: string;
  change: string; // Used for Title
  snippet: string; // Used for Body
  time: string; // Used for publishedAt
  isPositive: boolean;
}

@Component({
  selector: 'app-stock-news',
  standalone: true,
  imports: [CommonModule, TimeAgoPipePipe],
  templateUrl: './stock-news.html',
  styleUrl: './stock-news.css',
})
export class StockNews implements OnInit {
  newsStocks = signal<NewsStock[]>([]);

  constructor(private appSer: AppServices) {
    effect(() => {
      console.log('News Signal Updated:', this.newsStocks());
    });
  }

  ngOnInit(): void {
    this.appSer.getStockNews().subscribe({
      next: (res: NewsFeedResponse) => {
        // Map the feed data to the local NewsStock interface
        const formattedNews: NewsStock[] = res.feed.map((post) => {
          // Get the first CTA to extract logo and stock info
          const cta = post.data.cta[0];
          
          return {
            name: cta?.ctaText || 'Unknown Stock',
            logo: cta?.logoUrl || '',
            change: post.data.title,
            snippet: post.data.body,
            time: post.publishedAt,
            // Logic: You can determine isPositive based on your specific requirements 
            // or by checking the title/body keywords
            isPositive: post.data.title.toLowerCase().includes('profit') || 
                        post.data.title.toLowerCase().includes('jump')
          };
        });

        this.newsStocks.set(formattedNews);
      },
      error: (err) => {
        console.error('Error fetching stock news:', err);
      }
    });
  }
}