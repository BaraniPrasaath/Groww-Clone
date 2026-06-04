import { Routes } from '@angular/router';
import { Main } from './welcome/main/main';
import { Login } from './features/auth/login/login';
import { PhoneNum } from './features/auth/phone-num/phone-num';
import { OtpModel } from './features/auth/otp-model/otp-model';
import { Success } from './welcome/components/success/success';
import { PinEnter } from './features/auth/pin-enter/pin-enter';
import { PinOtpVerify } from './features/auth/pin-otp-verify/pin-otp-verify';
import { SetPassword } from './features/auth/set-password/set-password';
import { Register } from './features/auth/register/register';
import { PinVerify } from './features/auth/pin-verify/pin-verify';
import { MainComponent } from './features/dashboard/explore/main-component/main-component';
import { FloatingHeader } from './shared/components/floating-header/floating-header';
import { MostBoughtStocksOnGroww } from './features/dashboard/explore/pages/most-bought-stocks-on-groww/most-bought-stocks-on-groww';
import { ContainerComponent } from './features/dashboard/explore/pages/container-component/container-component';
import { MtfMostTraded } from './features/dashboard/explore/pages/mtf-most-traded/mtf-most-traded';
import { IntradayStocksScreener } from './features/dashboard/explore/pages/intraday-stocks-screener/intraday-stocks-screener';
import { SectorsTrending } from './features/dashboard/explore/pages/sectors-trending/sectors-trending';
import { EtfScreener } from './features/dashboard/explore/pages/etf-screener/etf-screener';
import { EtfNfo } from './features/dashboard/explore/pages/etf-nfo/etf-nfo';
import { MarketNewsStocks } from './features/dashboard/explore/pages/market-news-stocks/market-news-stocks';
import { ContainerComponentTopMovers } from './features/dashboard/explore/pages/container-component-top-movers/container-component-top-movers';
import { TopMovers } from './features/dashboard/explore/pages/top-movers/top-movers';
import { Holdings } from './features/dashboard/holdings/holdings';
import { Position } from './features/dashboard/position/position';
import { Orders } from './features/dashboard/orders/orders';
import { Watchlist } from './features/dashboard/watchlist/watchlist';
import { Connection } from './features/dashboard/explore/connection/connection';
import { ContainerComponentWithout } from './features/dashboard/explore/pages/container-component-without/container-component-without';

export const routes: Routes = [
  {
    path: '',
    component: Main,
  },
  {
    path: 'register',
    component: Register,
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'mobileVerificaiton',
    component: PhoneNum,
  },
  {
    path: 'otp',
    component: OtpModel,
  },
  {
    path: 'success',
    component: Success,
  },
  {
    path: 'pin-enter',
    component: PinEnter,
  },
  {
    path: 'pin-otp',
    component: PinOtpVerify,
  },
  {
    path: 'password-set',
    component: SetPassword,
  },
  {
    path: 'pin-verify',
    component: PinVerify,
  },
  {
    path: 'user',
    component: MainComponent,
    children: [
      {
        path: 'explore',
        component: Connection,
      },
      {
        path: 'holdings',
        component: Holdings,
      },
      {
        path: 'positions',
        component: Position,
      },
      {
        path: 'orders',
        component: Orders,
      },
      {
        path: 'watchlist',
        component: Watchlist,
      },
    ],
  },
  {
    path: 'dummy',
    component: FloatingHeader,
  },
  {
    path: 'markets',
    component: ContainerComponentTopMovers,
    children: [
      {
        path: ':type',
        component: TopMovers,
      },
    ],
  },
  {
    path: 'stocks',
    component: ContainerComponent,
    children: [
      {
        path: 'most-bought-stocks-on-groww',
        component: MostBoughtStocksOnGroww,
      },
      {
        path: 'mtf/most-traded',
        component: MtfMostTraded,
      },
      {
        path: 'etf-nfo',
        component: EtfNfo,
      },
    ],
  },
  {
    path: 'stocks',
    component: ContainerComponentWithout,
    children: [
      {
        path: 'intraday',
        component: IntradayStocksScreener,
      },
      {
        path: 'sectors-trending',
        component: SectorsTrending,
      },
    ],
  },
  {
    path: 'etf',
    component: ContainerComponentWithout,
    children: [
      {
        path: '',
        component: EtfScreener,
      },
    ],
  },
  {
    path: 'market-news',
    component: ContainerComponentWithout,
    children: [
      {
        path: 'stocks',
        component: MarketNewsStocks,
      },
    ],
  },
];
