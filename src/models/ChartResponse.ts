export interface ChartResponse {
  candles: Candle[];
  changeValue: number | null;
  changePerc: number | null;
  closingPrice: number | null;
  startTimeEpochInMillis: number;
}

export type Candle = [number, number];