import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mostBoughtStocks } from '../../../../models/mostBoughtStocks';
import { TopMoversResponse } from '../../../../models/TopMoversResponse';
import { ExploreCompaniesResponse } from '../../../../models/ExploreCompaniesResponse';

@Injectable({
  providedIn: 'root',
})
export class SeeMoreServices {
  constructor(private http: HttpClient) {}

  getMostBoughtStocks() {
    return this.http.get<mostBoughtStocks>(
      'https://groww.in/v1/api/stocks_data/v2/explore/list/top?discoveryFilterTypes=POPULAR_STOCKS_MOST_BOUGHT&page=0&size=100',
    );
  }

  getMostBoughtMTF() {
    return this.http.get<ExploreCompaniesResponse>(
      'https://groww.in/v1/api/stocks_data/v2/explore/list/top?discoveryFilterTypes=POPULAR_STOCKS_MOST_BOUGHT_MTF&page=0&size=100',
    );
  }
}
