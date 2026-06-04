import { Component, signal, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, ActivatedRoute, Router } from '@angular/router';

interface NavLink {
  path: string;
  label: string;
}

interface IndexOption {
  label: string;
  value: string;
}

@Component({
  selector: 'app-navigation',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navigation.html',
  styleUrl: './navigation.css',
})
export class Navigation {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  // State Management
  isDropdownOpen = signal(false);
  selectedIndex = signal('GIDXNIFTY100');
  activeTabLabel = signal('Top gainers');

  navLinks: NavLink[] = [
    { path: '/markets/top-gainers', label: 'Top gainers' },
    { path: '/markets/top-losers', label: 'Top losers' },
    { path: '/markets/volume-shockers', label: 'Volume shockers' },
    { path: '/markets/top-volume', label: 'Top by volume' },
    { path: '/markets/52-week-high', label: '52W high' },
    { path: '/markets/52-week-low', label: '52W low' },
  ];

  indexOptions: IndexOption[] = [
    { label: 'NIFTY 100', value: 'GIDXNIFTY100' },
    { label: 'NIFTY 500', value: 'GIDXNIFTY500' },
    { label: 'NIFTY Midcap 100', value: 'GIDXNIFMDCP100' },
    { label: 'NIFTY Smallcap 100', value: 'GIDXNIFSMCP100' },
    { label: 'Nifty Total Market', value: 'GIDXNIFTYTOTALMCAP' },
  ];

  constructor() {
    // Listen to query parameters and current path to update active states
    this.route.queryParams.subscribe((params) => {
      if (params['index']) {
        this.selectedIndex.set(params['index']);
      }
    });

    // Update Header Text dynamically based on active route
    this.router.events.subscribe(() => {
      const currentPath = this.router.url.split('?')[0];
      const activeLink = this.navLinks.find((link) => currentPath.includes(link.path));
      if (activeLink) {
        this.activeTabLabel.set(activeLink.label);
      }
    });
  }

  toggleDropdown() {
    this.isDropdownOpen.update((v) => !v);
  }

  selectIndex(value: string) {
    this.selectedIndex.set(value);
    this.isDropdownOpen.set(false);

    // Update query params without losing the current route path
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { index: value },
      queryParamsHandling: 'merge',
    });
  }

  getSelectedIndexLabel(): string {
    const activeOption = this.indexOptions.find((opt) => opt.value === this.selectedIndex());
    return activeOption ? activeOption.label : 'Select Index';
  }
}
