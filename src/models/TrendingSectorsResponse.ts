export interface Sector {
  sectorName: string;
  sectorLogo: string;
  darkLogo: string;
  totalStocks: number;
  positiveStocks: number;
  negativeStocks: number;
  dayChangePercent: number;
  industryCode: string;
}

export interface TrendingSectorsData {
  title: string;
  sectors: Sector[];
}

export interface TrendingSectorsResponse {
  name: string;
  data: TrendingSectorsData;
  // Included cache-related fields if you need them
  cacheStatus: string;
  cacheControl: {
    maxAge: number;
    public: boolean;
  };
}