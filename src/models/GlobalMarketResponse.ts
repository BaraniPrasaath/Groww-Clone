export interface GlobalMarketResponse {
  aggregatedGlobalInstrumentDto: GlobalInstrument[];
}

export interface GlobalInstrument {
  livePriceDto: LivePriceDto;
  instrumentDetailDto: InstrumentDetailDto;
}

export interface LivePriceDto {
  value: number;
  open: number;
  high: number;
  low: number;
  close: number;
  dayChange: number;
  dayChangePerc: number;
  tsInMillis: number;
}

export interface InstrumentDetailDto {
  weight: number;
  symbol: string;
  name: string;
  country: string;
  continent: string;
  gsin: string;
  logoUrl: string;
  searchId: string;
}