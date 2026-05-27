export interface IntradayVolumeResponse {
  exploreCompanies: ExploreCompanies;
  count: number;
}

export interface ExploreCompanies {
  POPULAR_STOCKS_INTRADAY_VOLUME: PopularStock[];
}

export interface PopularStock {
  company: Company;
  stats: Stats;
}

export interface Company {
  isin: string;
  growwContractId: string;
  companyName: string;
  searchId: string;
  nseScriptCode: string;
  companyStatus: string;
  companyShortName: string;
  bseScriptCode: string;
  imageUrl: string;
}

export interface Stats {
  type: string;
  high: number;
  low: number;
  close: number;
  ltp: number;
  dayChange: number;
  dayChangePerc: number;
  lowPriceRange: number;
  highPriceRange: number;
}
