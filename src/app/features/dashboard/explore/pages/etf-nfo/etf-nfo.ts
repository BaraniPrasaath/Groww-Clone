import { CommonModule } from '@angular/common';
import { Component, effect, OnInit, signal } from '@angular/core';
import { AppServices } from '../../../../../core/services/app/app-services';

interface ETF {
  name: string;
  price: string;
  change: string;
  changePercent: string;
  isUp: boolean;
}

@Component({
  selector: 'app-etf-nfo',
  imports: [CommonModule],
  templateUrl: './etf-nfo.html',
  styleUrl: './etf-nfo.css',
})
export class EtfNfo implements OnInit {
  etfs = signal<ETF[]>([]);

  constructor(private appSer: AppServices) {
    effect(() => {
      console.log(this.etfs());
    });
  }

  ngOnInit(): void {
    this.appSer.getETFbyGroww(24).subscribe({
      next: (res) => {
        const rawCompanies = res.exploreCompanies['ETF_NFO'] || [];

        const formattedEtfs: ETF[] = rawCompanies.map((item) => {
          // Check if stats exist
          const hasStats = !!item.stats;
          const changeValue = hasStats ? item.stats.dayChange : 0;

          return {
            name: item.company.companyName,
            // Conditional mapping
            price: hasStats ? item.stats.ltp.toFixed(2) : '',
            change: hasStats ? item.stats.dayChange.toFixed(2) : '',
            changePercent: hasStats
              ? `(${changeValue > 0 ? item.stats.dayChangePerc.toFixed(2) : (item.stats.dayChangePerc * -1).toFixed(2)}%)`
              : '',
            isUp: hasStats ? item.stats.dayChange >= 0 : false,

            // Handle NFO Status if stats are missing
            // nfoStatus: !hasStats ? item.companyMetaContent?.metaContent?.status?.value : undefined,
          };
        });

        this.etfs.set(formattedEtfs);
      },
      error: (err) => console.error('Error fetching ETFs:', err),
    });
  }
}
