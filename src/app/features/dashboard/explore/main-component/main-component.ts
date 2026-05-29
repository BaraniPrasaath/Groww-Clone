import { Component, HostListener } from '@angular/core';
import { Header } from '../../../../shared/components/header/header';
import { SubHeader } from '../../../../shared/components/sub-header/sub-header';
import { MostBoughtStocks } from '../components/most-bought-stocks/most-bought-stocks';
import { TopMovers } from '../components/top-movers/top-movers';
import { MostTraded } from '../components/most-traded/most-traded';
import { TopIntrady } from '../components/top-intrady/top-intrady';
import { SectorTrending } from '../components/sector-trending/sector-trending';
import { MostBoughtEtf } from '../components/most-bought-etf/most-bought-etf';
import { EtfGrow } from '../components/etf-grow/etf-grow';
import { StockNews } from '../components/stock-news/stock-news';
import { Footer } from '../../../../welcome/footer/footer';
import { YourInvestments } from '../side-components/your-investments/your-investments';
import { ProductsTools } from '../side-components/products-tools/products-tools';
import { TradingScreens } from '../side-components/trading-screens/trading-screens';
import { RecentlyViewed } from '../components/recently-viewed/recently-viewed';
import { AppFooter } from '../../../../shared/components/app-footer/app-footer';
import { FloatingHeader } from '../../../../shared/components/floating-header/floating-header';

@Component({
  selector: 'app-main-component',
  imports: [
    Header,
    SubHeader,
    FloatingHeader,
    MostBoughtStocks,
    TopMovers,
    MostTraded,
    TopIntrady,
    SectorTrending,
    MostBoughtEtf,
    EtfGrow,
    StockNews,
    AppFooter,
    YourInvestments,
    ProductsTools,
    TradingScreens,
    RecentlyViewed,
  ],
  templateUrl: './main-component.html',
  styleUrl: './main-component.css',
})
export class MainComponent {
  isSticky: boolean = false
  @HostListener('window:scroll')
  onWindowScroll() {
    // Check if scroll position is greater than 100 pixels
    this.isSticky = window.pageYOffset > 100;
  }
}
