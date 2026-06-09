export interface newsChartResponse {
  results: dataofNews[];
}

export interface dataofNews {
  id: string;
  title: string;
  summary: string;
  url: string;
  imageUrl: null;
  pubDate: string;
  source: string;
}
