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
  ltp: number; // Last Traded Price
  dayChange: number;
  dayChangePerc: number;
  lowPriceRange: number;
  highPriceRange: number;
}

export interface ExploreCompanyItem {
  company: Company;
  stats: Stats;
}

export interface ExploreCompanies {
  [key: string]: ExploreCompanyItem[];
}

export interface ExploreCompaniesResponse_etf {
  exploreCompanies: ExploreCompanies;
  count: number;
}