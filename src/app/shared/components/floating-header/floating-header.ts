import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, signal } from '@angular/core';
import { price2show } from '../../../../models/price2show';
import { WelcomeService } from '../../../services/welcome-service';
import { SharedDataService } from '../../../services/shared-data-service';
import { commodityDetails } from '../../../../models/MarketPrice';

@Component({
  selector: 'app-floating-header',
  imports: [CommonModule],
  templateUrl: './floating-header.html',
  styleUrl: './floating-header.css',
})
export class FloatingHeader  implements OnInit {
  profile = signal(
    'https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/profile.8692709f.png',
  );

  tabs = ['Explore', 'Holdings', 'Positions', 'Orders', 'Watchlist'];

  activeTab = 0;

  underlineWidth = 70;
  underlinePosition = 0;

  stockPrice = signal<price2show[]>([]);

  constructor(private service: WelcomeService, private dataSer: SharedDataService) {
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

  ngOnInit(): void {
    const userProfile = this.dataSer.getUserProfile();
    console.log(userProfile);
    if (userProfile) {
      this.profile.set(userProfile);
    }
  }

  ngAfterViewInit() {
    this.updateUnderline();
  }

  updateUnderline() {
    this.underlinePosition = this.activeTab * 100;
  }

  set active(index: number) {
    this.activeTab = index;
    this.updateUnderline();
  }

  changeTab(index: number, item: string) {
    this.activeTab = index;
    console.log(item);
  }
}


