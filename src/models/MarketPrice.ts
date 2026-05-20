export interface commodityDetails {
  baseUnderlyingSearchId: string;
  displayName: string;
  lastDayClosePrice: number;
  logoUrl: string;
  spotPrice: number;
  symbol: string;
}

export interface MarketPrice {
  commodityMinimalDetailsResponses: commodityDetails[];
}
