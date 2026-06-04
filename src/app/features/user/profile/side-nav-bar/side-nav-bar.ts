import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav-bar',
  imports: [NgClass],
  templateUrl: './side-nav-bar.html',
  styleUrl: './side-nav-bar.css',
})
export class SideNavBar {
  profileUrl =
    'https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/_next/static/media/profile.8692709f.png';
  userName = 'barani prasaath dhamodharan (Barani)';

  constructor(private router: Router) {}

  menuItems = [
    { label: 'Basic Details', active: true, path: '/basic-details' },
    { label: 'Reports', active: false, path: '/report' },
    { label: 'Change Password', active: false, path: '/change-password' },
    { label: 'Change Groww PIN', active: false, path: '/change-pin' },
    { label: 'Trading controls', active: false, path: '/trading-controls' },
    { label: 'Trading APIs', active: false, path: '/trading-apis' },
    { label: 'Sell authorisation mode', active: false, path: '/sell-authorisation' },
    { label: 'Trading Details', active: false, path: '/trading-preference' },
    { label: 'Account Related Forms', active: false, path: '/account-related-forms' },
    { label: 'Nominee Details', active: false, path: '/nominee-details' },
    { label: 'Active Devices', active: false, path: '/active-devices' },
    { label: 'Report suspicious activity', active: false, path: '/freeze-account' }, // Active state as seen in the screenshot
  ];

  onClick(index: number) {
    this.menuItems = this.menuItems.map((item, i) => ({
      ...item,
      active: i === index,
    }));

    this.router.navigate([`/user/profile${this.menuItems[index].path}`]);
  }
}
