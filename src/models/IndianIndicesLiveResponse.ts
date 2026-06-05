export interface LiveIndexPoint {
  close: number;
  dayChange: number;
  dayChangePerc: number;
  high: number;
  low: number;
  open: number;
  symbol: string;
  tsInMillis: number;
  value: number;
  yearHighPrice: number | null;
  yearLowPrice: number | null;
  type: string;
}

export interface ExchangeLiveData {
  indexLivePointsMap: Record<string, LiveIndexPoint>;
  priceLivePointsMap: Record<string, unknown>;
}

export interface IndianIndicesLiveResponse {
  source: string;
  segment: string;
  exchangeAggRespMap: {
    NSE: ExchangeLiveData;
    BSE: ExchangeLiveData;
  };
}