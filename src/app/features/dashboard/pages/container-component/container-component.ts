import { Component, HostListener } from '@angular/core';
import { Header } from '../../../../shared/components/header/header';
import { SubHeader } from '../../../../shared/components/sub-header/sub-header';
import { FloatingHeader } from '../../../../shared/components/floating-header/floating-header';
import { MostBoughtStocksOnGroww } from '../most-bought-stocks-on-groww/most-bought-stocks-on-groww';
import { YourInvestments } from '../../explore/side-components/your-investments/your-investments';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-container-component',
  imports: [RouterOutlet, Header, SubHeader, FloatingHeader, YourInvestments],
  templateUrl: './container-component.html',
  styleUrl: './container-component.css',
})
export class ContainerComponent {
  isSticky: boolean = false;
  @HostListener('window:scroll')
  onWindowScroll() {
    // Check if scroll position is greater than 100 pixels
    this.isSticky = window.pageYOffset > 100;
  }
}
