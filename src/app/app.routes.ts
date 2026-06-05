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
import { ContainerComponentUser } from './features/user/profile/container-component-user/container-component-user';
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
import { BasicDetails } from './features/user/profile/components/basic-details/basic-details';
import { Reports } from './features/user/profile/components/reports/reports';
import { ChangePassword } from './features/user/profile/components/change-password/change-password';
import { ChangeGrowwPin } from './features/user/profile/components/change-groww-pin/change-groww-pin';
import { TradingControlls } from './features/user/profile/components/trading-controlls/trading-controlls';
import { TradingApis } from './features/user/profile/components/trading-apis/trading-apis';
import { SellAuthorizationMode } from './features/user/profile/components/sell-authorization-mode/sell-authorization-mode';
import { TradingDetails } from './features/user/profile/components/trading-details/trading-details';
import { AccountRelatedForms } from './features/user/profile/components/account-related-forms/account-related-forms';
import { NomineeDetails } from './features/user/profile/components/nominee-details/nominee-details';
import { ActiveDevices } from './features/user/profile/components/active-devices/active-devices';
import { ReportSuspeciousActivity } from './features/user/profile/components/report-suspecious-activity/report-suspecious-activity';
import { Inr } from './features/user/balance/inr/inr';
import { Stocks } from './features/user/orders/component/stocks/stocks';
import { CustomerSupport } from './features/user/help/component/customer-support/customer-support';
import { CompleteSetup } from './features/user/help/component/complete-setup/complete-setup';
import { Container } from './features/user/orders/container/container';
import { FuturesAndOptions } from './features/user/orders/component/futures-and-options/futures-and-options';
import { MutualFunds } from './features/user/orders/component/mutual-funds/mutual-funds';
import { GlobeIndices } from './features/dashboard/explore/pages/globe-indices/globe-indices';

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
    path: 'indices',
    component: ContainerComponentWithout,
    children: [
      {
        path: 'global-indices',
        component: GlobeIndices,
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
  {
    path: 'user/profile',
    component: ContainerComponentWithout,
    children: [
      {
        path: '',
        component: ContainerComponentUser,
        children: [
          {
            path: 'basic-details',
            component: BasicDetails,
          },
          {
            path: 'report',
            component: Reports,
          },
          {
            path: 'change-password',
            component: ChangePassword,
          },
          {
            path: 'change-pin',
            component: ChangeGrowwPin,
          },
          {
            path: 'trading-controls',
            component: TradingControlls,
          },
          {
            path: 'trading-apis',
            component: TradingApis,
          },
          {
            path: 'sell-authorisation',
            component: SellAuthorizationMode,
          },
          {
            path: 'trading-preference',
            component: TradingDetails,
          },
          {
            path: 'account-related-forms',
            component: AccountRelatedForms,
          },
          {
            path: 'nominee-details',
            component: NomineeDetails,
          },
          {
            path: 'active-devices',
            component: ActiveDevices,
          },
          {
            path: 'freeze-account',
            component: ReportSuspeciousActivity,
          },
        ],
      },
    ],
  },
  {
    path: 'user/balance',
    component: ContainerComponentWithout,
    children: [
      {
        path: 'inr',
        component: Inr,
      },
    ],
  },
  {
    path: 'user/order',
    component: ContainerComponentWithout,
    children: [
      {
        path: '',
        component: Container,
        children: [
          {
            path: 'stock',
            component: Stocks,
          },
          {
            path: 'futures-and-options',
            component: FuturesAndOptions,
          },
          {
            path: 'mutual-funds',
            component: MutualFunds,
          },
        ],
      },
    ],
  },
  {
    path: 'help',
    component: ContainerComponentWithout,
    children: [
      {
        path: '',
        component: CustomerSupport,
      },
      {
        path: 'complete-setup',
        component: CompleteSetup,
      },
    ],
  },
];
