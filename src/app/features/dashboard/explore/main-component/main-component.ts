import { Component } from '@angular/core';
import { Header } from '../header/header';
import { SubHeader } from '../sub-header/sub-header';
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
import { AppFooter } from '../components/app-footer/app-footer';

@Component({
  selector: 'app-main-component',
  imports: [
    Header,
    SubHeader,
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
export class MainComponent {}
