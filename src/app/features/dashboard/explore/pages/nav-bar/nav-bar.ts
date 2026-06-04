import { Component, OnInit, signal, ViewChild, ViewContainerRef } from '@angular/core';
import { SharedDataService } from '../../../../../core/services/shared-data-service';
import { Router } from '@angular/router';
import { ProfileOptions } from '../../../../user/profile-options/profile-options';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
})
export class NavBar implements OnInit {
  @ViewChild('popUp', { read: ViewContainerRef }) popUpContainer!: ViewContainerRef;
  navLinks = [
    { label: 'Explore', active: false },
    { label: 'Holdings', active: false },
    { label: 'Positions', active: false },
    { label: 'Orders', active: false },
    { label: 'Watchlist', active: false },
  ];

  logoUrl = 'https://resources.groww.in/web-assets/img/website-logo/groww-logo-270.webp';
  profile = signal(
    'https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/profile.8692709f.png',
  );
  popUP = signal(false);

  constructor(
    private dataSer: SharedDataService,
    private route: Router,
  ) {}

  ngOnInit(): void {
    const userProfile = this.dataSer.getUserProfile();
    console.log(userProfile);
    if (userProfile) {
      this.profile.set(userProfile);
    }
  }

  changeTab(item: string) {
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
