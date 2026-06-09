export interface CorporateEventsResponse {
  gsin: string;
  events: CorporateEvent[];
}

export interface CorporateEvent {
  eventTitle: string;
  announcementDate?: string;
  exDate?: string;
  recordDate?: string;
  description?: string;
  eventType: string;
  primaryDate: string;
  corporateEventFilter: string;
  eventDetail?: EventDetail;
  eventMetadata?: EventMetadata;
}

export interface EventDetail {
  value: string;
  description: string;
}

export interface EventMetadata {
  isin: string;
  coCode: string;
  coName: string;
  reIsin: string;
  remark: string;
  symbol: string;
  premium: string;
  faceValue: string;
  rightDate: string;
  recordDate: string;
  rightsRatio: string;
  announcementDate: string;
  offerPrice: string;
}