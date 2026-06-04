import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../../../../shared/components/header/header';
import { SubHeader } from '../../../../../shared/components/sub-header/sub-header';
import { FloatingHeader } from '../../../../../shared/components/floating-header/floating-header';
import { YourInvestments } from '../../side-components/your-investments/your-investments';
import { Navigation } from '../navigation/navigation';
import { AppFooter } from '../../../../../shared/components/app-footer/app-footer';
import { NavBar } from '../nav-bar/nav-bar';
import { FloatNavBar } from '../float-nav-bar/float-nav-bar';
import { YoruInvestmentWithButton } from '../../side-components/yoru-investment-with-button/yoru-investment-with-button';

@Component({
  selector: 'app-container-component-top-movers',
  imports: [RouterOutlet, YoruInvestmentWithButton, Navigation, AppFooter, NavBar, FloatNavBar],
  templateUrl: './container-component-top-movers.html',
  styleUrl: './container-component-top-movers.css',
})
export class ContainerComponentTopMovers {
  isSticky: boolean = false;
  @HostListener('window:scroll')
  onWindowScroll() {
    // Check if scroll position is greater than 100 pixels
    this.isSticky = window.pageYOffset > 100;
  }
}
