import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { AppServices } from '../../../../core/services/app/app-services';
import { ActivatedRoute, Router } from '@angular/router';

interface Stock {
  name: string;
  symbol: string;
  logoUrl: string;
  price: number;
  isPositive: boolean;
  marketCap: number;
  peRatio: number;
  pbRatio: number;
  performancePosition: number; // 0 to 100 representing the tick mark position
}

@Component({
  selector: 'app-overview',
  imports: [CommonModule],
  templateUrl: './overview.html',
  styleUrl: './overview.css',
})
export class Overview implements OnInit {
  stocks = signal<Stock[]>([]);

  constructor(
    private appSer: AppServices,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const searchId = this.route.snapshot.paramMap.get('id');
    this.appSer.getCompanyDetails(searchId!).subscribe({
      next: (res) => {
        const company: Stock[] = res.similarAssets.peerList.map((company) => ({
          name: company.companyHeader.displayName,
          symbol: company.companyHeader.nseScriptCode,
          logoUrl: company.companyHeader.logoUrl || '',
          price: company.nseYearHigh,
          isPositive: company.nseYearHigh >= 0,
          marketCap: company.marketCap,
          peRatio: company.peRatio || 0,
          pbRatio: company.pbRatio || 0,
          performancePosition:
            ((company.nseYearHigh - company.nseYearLow) / company.nseYearHigh) * 100,
        }));
        this.stocks.set(company);
      },
    });
  }
}
