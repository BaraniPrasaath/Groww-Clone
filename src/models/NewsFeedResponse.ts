export interface StockCta {
  type: string;
  ctaText: string;
  ctaUrl: string;
  logoUrl: string;
  meta: {
    bseScriptCode: string;
    nseScriptCode: string;
  };
}

export interface Reaction {
  type: string;
  count: number;
  active: boolean;
}

export interface PostData {
  cta: StockCta[];
  title: string;
  body: string;
  media: any[]; // Adjust if you expect specific media objects
  reactions: Reaction[];
}

export interface NewsPost {
  name: string;
  postId: string;
  category: string | null;
  publisher: string;
  publisherId: string;
  publishedAt: string; // ISO Date string
  expireAt: string;    // ISO Date string
  campaignType: string;
  truncateText: boolean;
  data: PostData;
}

export interface NewsFeedResponse {
  feed: NewsPost[];
}