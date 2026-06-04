export interface EtfResponse {
  age: number;
  cacheStatus: string;
  cacheControl: CacheControl;
  name: string;
  data: ScreenerData;
}

export interface CacheControl {
  maxAge: number;
  public: boolean;
}

export interface ScreenerData {
  title: string;
  screenerList: EtfStock[];
}

export interface EtfStock {
  trackingError: number | null;
  gsin: string;
  nav: number;
  ltp: number;
  volume: number;
  expenseRatio: number;
  aum: number;
  close: number;
  returns: ReturnMetric[];
  nseScriptCode: string;
  bseScriptCode: string | null;
  searchId: string;
  isin: string;
  tag: string;
  tagColor: string;
  exchange: string;
  companyData: CompanyData;
}

export interface ReturnMetric {
  key: string;
  value: number | null;
}

export interface CompanyData {
  shortName: string;
  logoUrl: string;
}
