import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MarketPrice } from '../../models/MarketPrice';

@Injectable({
  providedIn: 'root',
})
export class WelcomeService {
  constructor(private http: HttpClient) {}

  getMarketData() {
    return this.http.get<MarketPrice>('https://groww.in/v1/api/commodity_fo/v1/spot-price/all');
  }
}
