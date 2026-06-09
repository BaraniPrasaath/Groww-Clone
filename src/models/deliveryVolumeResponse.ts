export interface deliveryVolumeResponse {
  searchId: string;
  isin: string;
  data: deliveryVolumeResponseofData[];
}

export interface deliveryVolumeResponseofData {
  startDate: string;
  endDate: string;
  totalVolume: number;
  deliveryVolume: number;
}
