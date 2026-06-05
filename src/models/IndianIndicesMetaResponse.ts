export interface AssetHeader {
  searchId: string;
  growwCompanyId: string;
  isin: string;
  displayName: string;
  shortName: string;
  type: string;

  logoUrl: string;

  nseScriptCode?: string;
  bseScriptCode?: string;

  isFnoEnabled?: boolean;
  isBseTradable?: boolean;
  isNseTradable?: boolean;
  isBseFnoEnabled?: boolean;
  isNseFnoEnabled?: boolean;

  floatingShares?: number;
}

export interface IndexAsset {
  header: AssetHeader;
  yearLowPrice: number;
  yearHighPrice: number;
}

export interface IndianIndicesMetaResponse {
  allAssets: IndexAsset[];
}