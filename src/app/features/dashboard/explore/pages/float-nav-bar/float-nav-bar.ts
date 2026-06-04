import { Component, OnInit, signal } from '@angular/core';
import { SharedDataService } from '../../../../../core/services/shared-data-service';

@Component({
  selector: 'app-float-nav-bar',
  imports: [],
  templateUrl: './float-nav-bar.html',
  styleUrl: './float-nav-bar.css',
})
export class FloatNavBar implements OnInit{
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

  constructor(private dataSer: SharedDataService) {}

  ngOnInit(): void {
    const userProfile = this.dataSer.getUserProfile();
    console.log(userProfile);
    if (userProfile) {
      this.profile.set(userProfile);
    }
  }
}
