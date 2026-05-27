import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TopMoversResponse } from '../../../models/TopMoversResponse';
import { ExploreCompaniesResponse } from '../../../models/ExploreCompaniesResponse';
import { IntradayVolumeResponse } from '../../../models/IntradayVolumeResponse';

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
}
