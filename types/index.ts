export type Category = 'epilator' | 'face-device' | 'hair-dryer' | 'skin-care';

export interface AffiliateUrls {
  amazon?: string;
  rakuten?: string;
  official?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: Category;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  affiliateUrls: AffiliateUrls;
  catchCopy: string;
  description: string;
  features: string[];
  pros: string[];
  cons: string[];
  specs: Record<string, string>;
  rank?: number;
  isRecommended?: boolean;
  badge?: string;
  articleSections?: ArticleSection[];
}

export interface ArticleSection {
  h2: string;
  paragraphs: string[];
  tip?: string;
  warning?: string;
}

export type SortKey = 'price' | 'rating' | 'reviewCount';
export type SortOrder = 'asc' | 'desc';

export interface CategoryMeta {
  id: Category;
  label: string;
  icon: string;
  desc: string;
  href: string;
}
