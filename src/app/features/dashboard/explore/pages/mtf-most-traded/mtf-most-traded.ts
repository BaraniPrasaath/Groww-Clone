import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { SeeMoreServices } from '../../../../../core/services/seeMore/see-more-services';
import { ExploreCompaniesResponse } from '../../../../../../models/ExploreCompaniesResponse';
import { AppServices } from '../../../../../core/services/app/app-services';

interface MTFStock {
  name: string;
  price: number;
  change: string;
  changePercent: string;
  isUp: boolean;
  haircut: string;
  low: string;
  high: string;
}

@Component({
  selector: 'app-mtf-most-traded',
  imports: [CommonModule],
  templateUrl: './mtf-most-traded.html',
  styleUrl: './mtf-most-traded.css',
})
export class MtfMostTraded implements OnInit {
  stocks = signal<MTFStock[]>([]);

  appSer = inject(AppServices);

  ngOnInit(): void {
    this.appSer.getMostTraded(100).subscribe({
      next: (res: ExploreCompaniesResponse) => {
        res.exploreCompanies.POPULAR_STOCKS_MOST_BOUGHT_MTF.forEach((data) => {
          const dataArr = {
            name: '',
            price: 0,
            change: '',
            changePercent: '',
            isUp: false,
            haircut: '',
            low: '',
            high: '',
          };
          dataArr.name = data.company.companyShortName;
          dataArr.price = data.stats.ltp;
          const changeValue = data.stats.ltp - data.stats.close;
          dataArr.change = changeValue.toFixed(2);
          dataArr.changePercent =
            changeValue > 0
              ? '(' +
                (((data.stats.ltp - data.stats.close) / data.stats.close) * 100).toFixed(2) +
                '%)'
              : '(' +
                (((data.stats.ltp - data.stats.close) / data.stats.close) * 100 * -1).toFixed(2) +
                '%)';
          dataArr.isUp = changeValue > 0 ? true : false;
          dataArr.haircut = data.company.mtfHaircut + '%';
          dataArr.low = data.stats.low.toFixed(2);
          dataArr.high = data.stats.high.toFixed(2);
          this.stocks.update((stock) => [...stock, dataArr]);
        });
      },
    });
  }
}
