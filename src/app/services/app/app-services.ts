import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TopMoversResponse } from '../../../models/TopMoversResponse';
import { ExploreCompaniesResponse } from '../../../models/ExploreCompaniesResponse';
import { IntradayVolumeResponse } from '../../../models/IntradayVolumeResponse';
import { TrendingSectorsResponse } from '../../../models/TrendingSectorsResponse';
import { ExploreCompaniesResponse_etf } from '../../../models/ExploreCompaniesResponse_etf';
import { ExploreCompaniesResponse_etfByGroww } from '../../../models/ExploreCompaniesResponse_etfByGroww';
import { NewsFeedResponse } from '../../../models/NewsFeedResponse';

@Injectable({
  providedIn: 'root',
})
export class AppServices {
  constructor(private http: HttpClient) {}

  getTopMovers() {
    return this.http.get<TopMoversResponse>(
      'https://groww.in/bff/web/stocks/explore/web-pages/top_movers?indice=GIDXNIFTY100&moverType=TOP_GAINERS&pageSize=6',
    );
  }

  getMostTraded() {
    return this.http.get<ExploreCompaniesResponse>(
      'https://groww.in/v1/api/stocks_data/v2/explore/list/top?discoveryFilterTypes=POPULAR_STOCKS_MOST_BOUGHT_MTF&page=0&size=4',
    );
  }

  getTopIntrady() {
    return this.http.get<IntradayVolumeResponse>(
      'https://groww.in/v1/api/stocks_data/v2/explore/list/top?discoveryFilterTypes=POPULAR_STOCKS_INTRADAY_VOLUME&page=0&size=4',
    );
  }

  getTrendingSectors(){
    return this.http.get<TrendingSectorsResponse>('https://groww.in/bff/web/stocks/explore/web-pages/trending_sectors?pageSize=6')
  }

  getMostBroughtETF(){
    return this.http.get<ExploreCompaniesResponse_etf>('https://groww.in/v1/api/stocks_data/v2/explore/list/top?discoveryFilterTypes=POPULAR_STOCKS_MOST_BOUGHT_ETF_INTERNATIONAL,POPULAR_STOCKS_MOST_BOUGHT_ETF_NIFTY_FIFTY,POPULAR_STOCKS_MOST_BOUGHT_ETF_SILVER,POPULAR_STOCKS_MOST_BOUGHT_ETF_GOLD&page=0&size=4')
  }

  getETFbyGroww(){
    return this.http.get<ExploreCompaniesResponse_etfByGroww>('https://groww.in/v1/api/stocks_data/v2/explore/list/top/advance?discoveryAdvanceFilterTypes=ETF_NFO&page=0&size=4')
  }

  getStockNews(){
    return this.http.get<NewsFeedResponse>('https://groww.in/v2/api/feed/public?page=0&publisherId=stocknewssummary&size=4')
  }
}
