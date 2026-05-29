import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, effect, OnInit, signal } from '@angular/core';
import { AppServices } from '../../../../../services/app/app-services';

// Ensure this interface matches the structure you want in your UI
interface Etf {
  name: string;
  logo: string;
  price?: string;         // Optional
  changeValue?: string;   // Optional
  changePercent?: string; // Optional
  isPositive?: boolean;   // Optional
  nfoStatus?: string;     // Added for NFO items
}

@Component({
  selector: 'app-etf-grow',
  standalone: true, // Ensure this is true if using imports array
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './etf-grow.html',
  styleUrl: './etf-grow.css',
})
export class EtfGrow implements OnInit {
  etfs = signal<Etf[]>([]);

  constructor(private appSer: AppServices) {
    effect(() => {
      console.log('Signal state updated:', this.etfs());
    });
  }

  ngOnInit(): void {
    this.appSer.getETFbyGroww().subscribe({
  next: (res) => {
    const rawCompanies = res.exploreCompanies['ETF_NFO'] || [];

    const formattedEtfs: Etf[] = rawCompanies.map((item) => {
      // Check if stats exist
      const hasStats = !!item.stats;
      const changeValue = hasStats ? item.stats.dayChange : 0;

      return {
        name: item.company.companyName,
        logo: item.company.imageUrl,
        
        // Conditional mapping
        price: hasStats ? item.stats.ltp.toFixed(2) : undefined,
        changeValue: hasStats ? item.stats.dayChange.toFixed(2) : undefined,
        changePercent: hasStats ? `(${changeValue>0? item.stats.dayChangePerc.toFixed(2):(item.stats.dayChangePerc * (-1)).toFixed(2)}%)` : undefined,
        isPositive: hasStats ? item.stats.dayChange >= 0 : undefined,
        
        // Handle NFO Status if stats are missing
        nfoStatus: !hasStats ? item.companyMetaContent?.metaContent?.status?.value : undefined
      };
    });

    this.etfs.set(formattedEtfs);
  },
  error: (err) => console.error('Error fetching ETFs:', err)
});
  }
}