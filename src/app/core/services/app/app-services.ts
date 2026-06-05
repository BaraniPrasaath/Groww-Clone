import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TopMoversResponse } from '../../../../models/TopMoversResponse';
import { ExploreCompaniesResponse } from '../../../../models/ExploreCompaniesResponse';
import { IntradayVolumeResponse } from '../../../../models/IntradayVolumeResponse';
import { TrendingSectorsResponse } from '../../../../models/TrendingSectorsResponse';
import { ExploreCompaniesResponse_etf } from '../../../../models/ExploreCompaniesResponse_etf';
import { ExploreCompaniesResponse_etfByGroww } from '../../../../models/ExploreCompaniesResponse_etfByGroww';
import { NewsFeedResponse } from '../../../../models/NewsFeedResponse';
import { mostBoughtStocks } from '../../../../models/mostBoughtStocks';
import { EtfResponse } from '../../../../models/EtfResponse';
import { GlobalMarketResponse } from '../../../../models/GlobalMarketResponse';
import { IndianIndicesMetaResponse } from '../../../../models/IndianIndicesMetaResponse';
import { IndianIndicesLiveResponse } from '../../../../models/IndianIndicesLiveResponse';

@Injectable({
  providedIn: 'root',
})
export class AppServices {
  constructor(private http: HttpClient) {}

  getMostBoughtStocksGroww(size: number) {
    return this.http.get<mostBoughtStocks>(
      `https://groww.in/v1/api/stocks_data/v2/explore/list/top?discoveryFilterTypes=POPULAR_STOCKS_MOST_BOUGHT&page=0&size=${size}`,
    );
  }

  getTopMovers(type: string, index: string, size: number) {
    return this.http.get<TopMoversResponse>(
      `https://groww.in/bff/web/stocks/explore/web-pages/top_movers?indice=${index}&moverType=${type}&pageSize=${size}`,
    );
  }

  getMostTraded(size: number) {
    return this.http.get<ExploreCompaniesResponse>(
      `https://groww.in/v1/api/stocks_data/v2/explore/list/top?discoveryFilterTypes=POPULAR_STOCKS_MOST_BOUGHT_MTF&page=0&size=${size}`,
    );
  }

  getTopIntrady(size: number) {
    return this.http.get<IntradayVolumeResponse>(
      `https://groww.in/v1/api/stocks_data/v2/explore/list/top?discoveryFilterTypes=POPULAR_STOCKS_INTRADAY_VOLUME&page=0&size=${size}`,
    );
  }

  getTrendingSectors(size: number) {
    return this.http.get<TrendingSectorsResponse>(
      `https://groww.in/bff/web/stocks/explore/web-pages/trending_sectors?pageSize=${size}`,
    );
  }

  getMostBroughtETF(size: number) {
    return this.http.get<ExploreCompaniesResponse_etf>(
      `https://groww.in/v1/api/stocks_data/v2/explore/list/top?discoveryFilterTypes=POPULAR_STOCKS_MOST_BOUGHT_ETF_INTERNATIONAL,POPULAR_STOCKS_MOST_BOUGHT_ETF_NIFTY_FIFTY,POPULAR_STOCKS_MOST_BOUGHT_ETF_SILVER,POPULAR_STOCKS_MOST_BOUGHT_ETF_GOLD&page=0&size=${size}`,
    );
  }

  getMostBroughtETFseeMore() {
    return this.http.get<EtfResponse>('http://localhost:3000/etfSeeMore');
  }

  getETFbyGroww(size: number) {
    return this.http.get<ExploreCompaniesResponse_etfByGroww>(
      `https://groww.in/v1/api/stocks_data/v2/explore/list/top/advance?discoveryAdvanceFilterTypes=ETF_NFO&page=0&size=${size}`,
    );
  }

  getStockNews(size: number) {
    return this.http.get<NewsFeedResponse>(
      `https://groww.in/v2/api/feed/public?page=0&publisherId=stocknewssummary&size=${size}`,
    );
  }

  getGlobeIndices() {
    return this.http.get<GlobalMarketResponse>(
      'https://groww.in/v1/api/stocks_data/v1/global_instruments?instrumentType=GLOBAL_INSTRUMENTS',
    );
  }

  getIndianIndicesMeta() {
    return this.http.get<IndianIndicesMetaResponse>(
      'https://groww.in/v1/api/stocks_data/v1/company/search_id/nifty?fields=ALL_ASSETS&page=0&size=10',
    );
  }

  getIndianIndicesLive() {
    return this.http.get<IndianIndicesLiveResponse>('http://localhost:3000/indian-indices');
  }
}
