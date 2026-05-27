export interface TopMoversResponse {
  age: number;
  cacheStatus: string;
  cacheControl: CacheControl;
  name: string;
  data: TopMoversData;
}

export interface CacheControl {
  maxAge: number;
  public: boolean;
}

export interface TopMoversData {
  title: string;
  stocks: Stock[];
}

export interface Stock {
  isin: string;
  gsin: string;
  companyName: string;
  companyShortName: string;
  searchId: string;
  ltp: number;
  logoUrl: string;
  nseScriptCode: string;
  bseScriptCode: string;
  type: string;
  marketCap: number;
  volumeWeekAvg: number;
  close: number;
  yearHigh: number;
  yearLow: number;
  tag: string;
  tagColor: string;
}