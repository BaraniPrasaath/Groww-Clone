import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AppServices } from '../../../../core/services/app/app-services';

interface NewsItem {
  source: string;
  timeAgo: string;
  headline: string;
}

@Component({
  selector: 'app-news',
  standalone: true, // Assuming standalone based on the 'imports' array
  imports: [FormsModule, CommonModule],
  templateUrl: './news.html',
  styleUrl: './news.css',
})
export class News implements OnInit {
  newsItems = signal<NewsItem[]>([]);

  constructor(
    private appSer: AppServices,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const searchId = this.route.parent?.snapshot.paramMap.get('id');
    if (!searchId) return;

    this.appSer.getCompanyDetails(searchId).subscribe((res: any) => {
      this.appSer.getNewsStocks(res.header.growwCompanyId).subscribe({
        next: (newsRes: any) => {
          // Map the API results to the NewsItem interface
          const formattedNews: NewsItem[] = newsRes.results.map((item: any) => ({
            source: item.source,
            headline: item.title,
            timeAgo: this.calculateTimeAgo(item.pubDate),
          }));

          // Update the signal with the mapped data
          this.newsItems.set(formattedNews);
        },
        error: (err) => {
          console.error('Failed to load news:', err);
        },
      });
    });
  }

  /**
   * Helper method to convert an ISO date string into a relative time string
   */
  private calculateTimeAgo(dateString: string): string {
    if (!dateString) return '';

    const pastDate = new Date(dateString).getTime();
    const now = new Date().getTime();
    const diffInSeconds = Math.floor((now - pastDate) / 1000);

    const minutes = Math.floor(diffInSeconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (years > 0) return `${years} year${years > 1 ? 's' : ''} ago`;
    if (months > 0) return `${months} month${months > 1 ? 's' : ''} ago`;
    if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
    if (hours > 0) return `${hours} hr${hours > 1 ? 's' : ''} ago`;
    if (minutes > 0) return `${minutes} min${minutes > 1 ? 's' : ''} ago`;

    return 'Just now';
  }
}
