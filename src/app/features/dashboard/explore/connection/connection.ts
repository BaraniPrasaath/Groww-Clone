import { Component } from '@angular/core';
import { StockNews } from '../components/stock-news/stock-news';
import { EtfGrow } from '../components/etf-grow/etf-grow';
import { MostBoughtEtf } from '../components/most-bought-etf/most-bought-etf';
import { SectorTrending } from '../components/sector-trending/sector-trending';
import { TopIntrady } from '../components/top-intrady/top-intrady';
import { MostTraded } from '../components/most-traded/most-traded';
import { TopMovers } from '../components/top-movers/top-movers';
import { MostBoughtStocks } from '../components/most-bought-stocks/most-bought-stocks';
import { RecentlyViewed } from '../components/recently-viewed/recently-viewed';
import { TradingScreens } from '../side-components/trading-screens/trading-screens';
import { ProductsTools } from '../side-components/products-tools/products-tools';
import { YourInvestments } from '../side-components/your-investments/your-investments';

@Component({
  selector: 'app-connection',
  imports: [
    MostBoughtStocks,
    TopMovers,
    MostTraded,
    TopIntrady,
    SectorTrending,
    MostBoughtEtf,
    EtfGrow,
    StockNews,
    YourInvestments,
    ProductsTools,
    TradingScreens,
    RecentlyViewed,
  ],
  templateUrl: './connection.html',
  styleUrl: './connection.css',
})
export class Connection {}
