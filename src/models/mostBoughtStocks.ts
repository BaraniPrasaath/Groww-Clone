export interface Company {
  isin: string;
  growwContractId: string;
  companyName: string;
  searchId: string;
  nseScriptCode: string;
  companyStatus: string;
  companyShortName: string;
  bseScriptCode?: string; // Optional because some entries might omit it
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

export interface StockItem {
  company: Company;
  stats: Stats;
}

export interface mostBoughtStocks {
  exploreCompanies: {
    POPULAR_STOCKS_MOST_BOUGHT: StockItem[];
  };
  count: number;
}
