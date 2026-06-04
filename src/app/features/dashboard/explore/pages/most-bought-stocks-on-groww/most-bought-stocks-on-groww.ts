import { CommonModule } from '@angular/common';
import { Component, effect, HostListener, OnInit, signal } from '@angular/core';
import { SeeMoreServices } from '../../../../../core/services/seeMore/see-more-services';
// Update this import to match the interface structure defined for the exploreCompanies API
import { mostBoughtStocks } from '../../../../../../models/mostBoughtStocks';
import { AppServices } from '../../../../../core/services/app/app-services';

interface Stock {
  name: string;
  logo: string;
  price: string;
  change: string;
  changePercent: string;
  isUp: boolean;
  volume: string; // Not available in this specific API, you can remove or calculate if needed
}

@Component({
  selector: 'app-most-bought-stocks-on-groww',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './most-bought-stocks-on-groww.html',
  styleUrl: './most-bought-stocks-on-groww.css',
})
export class MostBoughtStocksOnGroww implements OnInit {
  stocks = signal<Stock[]>([]);
  isSticky: boolean = false;

  constructor(private appSer: AppServices) {
    effect(() => {
      console.log('Stocks signal updated:', this.stocks());
    });
  }

  ngOnInit(): void {
    this.appSer.getMostBoughtStocksGroww(100).subscribe({
      next: (res: mostBoughtStocks) => {
        // Correctly accessing the POPULAR_STOCKS_MOST_BOUGHT array
        const rawStocks = res.exploreCompanies.POPULAR_STOCKS_MOST_BOUGHT;

        // Map the raw API data to your 'Stock' interface
        const stockList: Stock[] = rawStocks.map((item) => ({
          name: item.company.companyShortName,
          logo: item.company.imageUrl,
          price: `₹${item.stats.ltp.toFixed(2)}`,
          change: item.stats.dayChange.toFixed(2),
          changePercent: `${item.stats.dayChangePerc.toFixed(2)}%`,
          isUp: item.stats.dayChange >= 0,
          volume: 'N/A', // This field is not in the exploreCompanies response
        }));

        this.stocks.set(stockList);
      },
      error: (err) => {
        console.error('Error fetching most bought stocks:', err);
      },
    });
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isSticky = window.pageYOffset > 100;
  }
}
