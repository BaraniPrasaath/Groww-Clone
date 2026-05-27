export interface ExploreCompaniesResponse {
  exploreCompanies: ExploreCompanies;
  count: number;
}

export interface ExploreCompanies {
  POPULAR_STOCKS_MOST_BOUGHT_MTF: PopularStock[];
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
  mtfHaircut: number;
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
