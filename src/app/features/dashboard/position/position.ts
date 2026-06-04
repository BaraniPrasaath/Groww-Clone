import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, computed, inject, OnInit, signal } from '@angular/core';

interface Stock {
  logo: string;
  name: string;
  price: string;
  changeVal: string;
  change: string;
  up: boolean;
}

@Component({
  selector: 'app-position',
  imports: [CommonModule],
  templateUrl: './position.html',
  styleUrl: './position.css',
})
export class Position implements OnInit {
  private http = inject(HttpClient);

  mostBought = signal<Stock[]>([]);
  activeTab = signal<'Large' | 'Mid' | 'Small'>('Large');

  // Computed property to handle slicing based on the active tab
  displayedStocks = computed(() => {
    const data = this.mostBought();
    const tab = this.activeTab();
    if (tab === 'Large') return data.slice(0, 5);
    if (tab === 'Mid') return data.slice(5, 10);
    return data.slice(10, 15);
  });

  ngOnInit() {
    this.fetchMostBoughtStocks();
  }

  private fetchMostBoughtStocks() {
    const url =
      'https://groww.in/v1/api/stocks_data/v2/explore/list/top?discoveryFilterTypes=POPULAR_STOCKS_MOST_BOUGHT&page=0&size=15';

    this.http.get<any>(url).subscribe({
      next: (data) => {
        const rawStocks = data?.exploreCompanies?.POPULAR_STOCKS_MOST_BOUGHT || [];

        const formattedStocks = rawStocks.map((item: any) => {
          const ltp = item.stats.ltp || 0;
          const dayChange = item.stats.dayChange || 0;
          const dayChangePerc = item.stats.dayChangePerc || 0;
          const isUp = dayChange >= 0;

          return {
            logo: item.company.imageUrl,
            name: item.company.companyShortName || item.company.companyName,
            price: `₹${ltp.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
            changeVal: `${isUp ? '+' : ''}${dayChange.toFixed(2)}`,
            change: `${Math.abs(dayChangePerc).toFixed(2)}%`,
            up: isUp,
          };
        });

        this.mostBought.set(formattedStocks);
      },
      error: (err) => console.error('Failed to fetch stocks:', err),
    });
  }

  setActiveTab(tab: 'Large' | 'Mid' | 'Small') {
    this.activeTab.set(tab);
  }
}
