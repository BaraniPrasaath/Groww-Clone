export interface CompanyProfileResponse {
  header: Header;
  details: Details;
  brandDtos: BrandDto[];
  stats: Stats;
  fundamentals: Fundamental[];
  shareHoldingPattern: ShareHoldingPattern;
  fundsInvested: FundsInvested[];
  priceData: PriceData;
  financialStatement: FinancialStatement[];
  financialStatementV2: FinancialStatementV2;
  similarAssets: SimilarAssets;
}

export interface Header {
  searchId: string;
  growwCompanyId: string;
  isin: string;
  industryName: string;
  displayName: string;
  shortName: string;
  type: string;
  isFnoEnabled: boolean;
  nseScriptCode: string;
  bseScriptCode: string;
  nseTradingSymbol: string;
  bseTradingSymbol: string;
  isBseTradable: boolean;
  isNseTradable: boolean;
  logoUrl: string;
  floatingShares: number;
  isBseFnoEnabled: boolean;
  isNseFnoEnabled: boolean;
  industryUrlDark: string;
  industryUrlLight: string;
  industryCodeV2: string;
}

export interface Details {
  fullName: string;
  parentCompany: string;
  headquarters: string;
  ceo: string;
  managingDirector: string;
  foundedYear: number;
  businessSummary: string;
  websiteUrl: string;
}

export interface BrandDto {
  name: string;
  logoUrl: string;
}

export interface Stats {
  marketCap: number;
  pbRatio: number;
  peRatio: number;
  divYield: number;
  bookValue: number;
  epsTtm: number;
  roe: number;
  industryPe: number;
  cappedType: string;
  dividendYieldInPercent: number;
  faceValue: number;
  debtToEquity: number;
  returnOnAssets: number;
  returnOnEquity: number;
  operatingProfitMargin: number;
  netProfitMargin: number;
  quickRatio: number;
  cashRatio: number;
  debtToAsset: number;
  evToSales: number;
  evToEbitda: number;
  earningsYield: number;
  sectorPb: number;
  sectorDivYield: number;
  sectorRoe: number;
  sectorRoce: number;
  priceToOcf: number;
  priceToFcf: number;
  roic: number;
  pePremiumVsSector: number;
  pbPremiumVsSector: number;
  divYieldVsSector: number;
  currentRatio: number;
  sectorPe: number;
  priceToSales: number;
  pegRatio: number;
}

export interface Fundamental {
  name: string;
  shortName: string;
  value: string;
}

export interface ShareHoldingPattern {
  [key: string]: ShareHoldingData;
}

export interface ShareHoldingData {
  promoters: Promoters;
  mutualFunds: PercentHolder;
  otherDomesticInstitutions: OtherDomesticInstitutions;
  foreignInstitutions: PercentHolder;
  retailAndOthers: PercentHolder;
}

export interface Promoters {
  individual: PercentHolder;
  government: PercentHolder;
  corporation: PercentHolder;
}

export interface OtherDomesticInstitutions {
  insurance: PercentHolder;
  otherFirms: PercentHolder;
}

export interface PercentHolder {
  percent: number;
}

export interface FundsInvested {
  name: string;
  searchId: string;
  investedAumPercent: number;
  rating: number;
  return3y: number;
  return1y: number;
  return5y?: number;
  logoUrl: string;
}

export interface PriceData {
  nse: ExchangePriceData;
  bse: ExchangePriceData;
}

export interface ExchangePriceData {
  yearLowPrice: number;
  yearHighPrice: number;
}

export interface FinancialStatement {
  title: string;
  yearly?: Record<string, number>;
  quarterly?: Record<string, number>;
  cagr?: Cagr;
}

export interface Cagr {
  oneYearTtm?: number;
  threeYearCagr?: number;
}

export interface FinancialStatementV2 {
  CONSOLIDATED: FinancialStatement[];
  STANDALONE: FinancialStatement[];
}

export interface SimilarAssets {
  type: string;
  size: number;
  peerList: PeerList[];
}

export interface PeerList {
  companyHeader: PeerCompanyHeader;
  nseYearLow: number;
  nseYearHigh: number;
  bseYearLow: number;
  bseYearHigh: number;
  marketCap: number;
  peRatio?: number;
  pbRatio: number;
}

export interface PeerCompanyHeader {
  searchId: string;
  growwCompanyId: string;
  isin: string;
  displayName: string;
  shortName: string;
  nseScriptCode: string;
  bseScriptCode: string;
  nseTradingSymbol: string;
  bseTradingSymbol: string;
  isBseTradable: boolean;
  isNseTradable: boolean;
  logoUrl?: string;
  isBseFnoEnabled: boolean;
  isNseFnoEnabled: boolean;
  industryUrlDark: string;
  industryUrlLight: string;
  industryCodeV2: string;
}
