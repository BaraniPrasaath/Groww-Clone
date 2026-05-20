import { Component, OnDestroy, signal } from '@angular/core';
import { WelcomeService } from '../../../services/welcome-service';
import { price2show } from '../../../../models/price2show';
import { commodityDetails } from '../../../../models/MarketPrice';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  imports: [RouterLink, CommonModule],
  templateUrl: './banner.html',
  styleUrl: './banner.css',
})
export class Banner implements OnDestroy {
  stockPrice = signal<price2show[]>([]);

  constructor(private service: WelcomeService) {
    service.getMarketData().subscribe(({ commodityMinimalDetailsResponses }) => {
      console.log(commodityMinimalDetailsResponses);
      commodityMinimalDetailsResponses.forEach((data: commodityDetails) => {
        const { displayName, spotPrice, lastDayClosePrice } = data;
        const obj: price2show = {
          name: '',
          spotPrice: 0,
          decOrincPrice: '',
        };
        obj.name = displayName;
        obj.spotPrice = spotPrice;
        let percentage: any = ((spotPrice - lastDayClosePrice) / lastDayClosePrice) * 100;
        percentage = percentage.toFixed(2);
        percentage = percentage.toString() + '%';
        obj.decOrincPrice = percentage;
        this.stockPrice.update((current) => [...current, obj]);
        console.log(percentage);
        console.log(
          `${data.displayName} -> spot price : ${data.spotPrice} -> close price : ${data.lastDayClosePrice}`,
        );
      });
    });
  }

  ngOnDestroy(): void {
    console.log('The final array: ', this.stockPrice());
  }

  trackByName(index: number, item: price2show) {
    return item.name;
  }
}
