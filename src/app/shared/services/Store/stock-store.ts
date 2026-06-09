import { Injectable, signal } from '@angular/core';

interface Stock {
  name: string;
  logo: string;
  price: string;
  change: string;
  changePercent: string;
  isPositive: boolean;
  searchId: string;
  nseScriptCode: string;
}

interface Etf {
  name: string;
  logo: string;
  price?: string; // Optional
  changeValue?: string; // Optional
  changePercent?: string; // Optional
  isPositive?: boolean; // Optional
  nfoStatus?: string; // Added for NFO items
  searchId: string;
  nseScriptCode: string;
}

@Injectable({
  providedIn: 'root',
})
export class StockStore {
  stocks = signal<Stock | null>(this.getFromLocal());
  etfs = signal<Etf | null>(this.getFromLocal());

  setStocks(data: Stock) {
    this.stocks.set(data);
    sessionStorage.setItem('currentCompany', JSON.stringify(data));
    console.log('from store set: ', data);
  }

  getStocks() {
    console.log('from store get: ', this.stocks());
    return this.stocks();
  }

  getFromLocal() {
    const data = sessionStorage.getItem('currentCompany');
    return data ? JSON.parse(data) : null;
  }

  setEtfs(data: Etf) {
    this.etfs.set(data);
    sessionStorage.setItem('currentCompany', JSON.stringify(data));
    console.log('from store set: ', data);
  }

  getEtfs() {
    console.log('from store get: ', this.etfs());
    return this.etfs();
  }
}
