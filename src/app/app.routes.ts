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
import { MostBoughtStocksOnGroww } from './features/dashboard/pages/most-bought-stocks-on-groww/most-bought-stocks-on-groww';
import { ContainerComponent } from './features/dashboard/pages/container-component/container-component';
import { TopGainers } from './features/dashboard/pages/TopMovers/top-gainers/top-gainers';
import { TopLosers } from './features/dashboard/pages/TopMovers/top-losers/top-losers';
import { VolumeShockers } from './features/dashboard/pages/TopMovers/volume-shockers/volume-shockers';
import { TopVolume } from './features/dashboard/pages/TopMovers/top-volume/top-volume';
import { FiveTwoWeekHigh } from './features/dashboard/pages/TopMovers/five-two-week-high/five-two-week-high';
import { FiveTwoWeekLow } from './features/dashboard/pages/TopMovers/five-two-week-low/five-two-week-low';
import { MtfMostTraded } from './features/dashboard/pages/mtf-most-traded/mtf-most-traded';
import { IntradayStocksScreener } from './features/dashboard/pages/intraday-stocks-screener/intraday-stocks-screener';
import { SectorsTrending } from './features/dashboard/pages/sectors-trending/sectors-trending';
import { EtfScreener } from './features/dashboard/pages/etf-screener/etf-screener';
import { EtfNfo } from './features/dashboard/pages/etf-nfo/etf-nfo';
import { MarketNewsStocks } from './features/dashboard/pages/market-news-stocks/market-news-stocks';

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
    path: 'explore',
    component: MainComponent,
  },
  {
    path: 'dummy',
    component: FloatingHeader,
  },
  {
    path: 'markets',
    component: ContainerComponent,
    children: [
      {
        path: 'top-gainers',
        component: TopGainers,
      },
      {
        path: 'top-losers',
        component: TopLosers,
      },

      {
        path: 'volume-shockers',
        component: VolumeShockers,
      },
      {
        path: 'top-volume',
        component: TopVolume,
      },
      {
        path: '52-week-high',
        component: FiveTwoWeekHigh,
      },
      {
        path: '52-week-low',
        component: FiveTwoWeekLow,
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
        path: 'intraday',
        component: IntradayStocksScreener,
      },
      {
        path: 'sectors-trending',
        component: SectorsTrending,
      },
      {
        path: 'etf-nfo',
        component: EtfNfo,
      },
    ],
  },
  {
    path: 'etf',
    component: EtfScreener,
  },
  {
    path: 'market-news',
    component: MarketNewsStocks,
  },
];
