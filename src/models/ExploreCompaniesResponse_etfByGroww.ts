export interface Company {
  isin: string;
  growwContractId: string;
  companyName: string;
  searchId: string;
  nseScriptCode: string;
  companyStatus: string;
  companyShortName: string;
  bseScriptCode?: string; // Optional as it might be missing
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

export interface CompanyMetaContent {
  metaContent: any; // Define further if specific fields are needed
  metaFields: any[];
}

export interface CompanyAttributes {
  redirectUrl: string;
  status: string;
  startDate: string | null;
  endDate: string | null;
  minInvestmentAmount: number | null;
  schemeCode: string;
}

export interface ETFItem {
  company: Company;
  stats: Stats;
  companyMetaContent: CompanyMetaContent;
  companyAttributes: CompanyAttributes;
}

export interface ExploreCompaniesResponse_etfByGroww {
  exploreCompanies: {
    [key: string]: ETFItem[];
  };
  count: number;
}