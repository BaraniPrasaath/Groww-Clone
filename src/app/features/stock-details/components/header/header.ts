import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  // Tab menu items
  tabs: string[] = ['Overview', 'Technicals', 'News', 'Events'];

  // Default active tab matching your image
  activeTab: string = 'Overview';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  setActiveTab(tab: string): void {
    this.activeTab = tab;
    if (tab === 'Overview') {
      this.router.navigate(['./'], {
        relativeTo: this.route,
      });
    } else {
      this.router.navigate([tab.toLowerCase()], {
        relativeTo: this.route,
      });
    }
  }
}
