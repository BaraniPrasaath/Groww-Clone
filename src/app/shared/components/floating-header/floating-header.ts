import { CommonModule } from '@angular/common';
import {
  Component,
  HostListener,
  OnInit,
  signal,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { price2show } from '../../../../models/price2show';
import { WelcomeService } from '../../../core/services/welcome-service';
import { SharedDataService } from '../../../core/services/shared-data-service';
import { commodityDetails } from '../../../../models/MarketPrice';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProfileOptions } from '../../../features/user/profile-options/profile-options';

@Component({
  selector: 'app-floating-header',
  imports: [CommonModule, FormsModule],
  templateUrl: './floating-header.html',
  styleUrl: './floating-header.css',
})
export class FloatingHeader implements OnInit {
  @ViewChild('popUp', { read: ViewContainerRef }) popUpContainer!: ViewContainerRef;
  profile = signal(
    'https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/profile.8692709f.png',
  );

  tabs = ['Explore', 'Holdings', 'Positions', 'Orders', 'Watchlist'];

  activeTab = 0;

  underlineWidth = 70;
  underlinePosition = 0;

  stockPrice = signal<price2show[]>([]);

  popUP = signal(false);

  constructor(
    private service: WelcomeService,
    private dataSer: SharedDataService,
    private route: Router,
  ) {
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
    console.log('[' + item + ']');

    const routes: Record<string, string> = {
      Holdings: '/user/holdings',
      Explore: '/user/explore',
      Positions: '/user/positions',
      Orders: '/user/orders',
      Watchlist: '/user/watchlist',
    };

    const route = routes[item.trim()];

    console.log(item, route);

    if (route) {
      this.route.navigate([route]);
    }
  }

  onProfileClick() {
    if (this.popUP()) {
      this.popUpContainer.clear();
      this.popUP.update((d) => !d);
      return;
    }
    this.popUpContainer.clear();
    const ref = this.popUpContainer.createComponent(ProfileOptions);
    ref.instance.conformation.subscribe((v: string) => this.onConformation(v));
    this.popUP.update((d) => !d);
  }

  onConformation(msg: string) {
    console.log(msg);
    if (msg === 'profile') {
      this.route.navigate(['/user/profile/basic-details']);
    } else if (msg === 'balance') {
      this.route.navigate(['/user/balance/inr']);
    } else if (msg === 'orders') {
      this.route.navigate(['/user/order/stock']);
    } else if (msg === 'help') {
      this.route.navigate(['/help']);
    } else if (msg === 'reports') {
      this.route.navigate(['/user/profile/report']);
    }
  }
}
