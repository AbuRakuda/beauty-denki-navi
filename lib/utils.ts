import { Product, SortKey, SortOrder } from '@/types';

export function sortProducts(products: Product[], key: SortKey, order: SortOrder): Product[] {
  return [...products].sort((a, b) => {
    const aVal = a[key] as number;
    const bVal = b[key] as number;
    return order === 'asc' ? aVal - bVal : bVal - aVal;
  });
}

export function formatPrice(price: number): string {
  return `¥${price.toLocaleString('ja-JP')}`;
}

export function calcDiscount(price: number, original: number): number {
  return Math.round((1 - price / original) * 100);
}

export function ratingStars(rating: number): { filled: boolean }[] {
  return Array.from({ length: 5 }, (_, i) => ({ filled: i < Math.floor(rating) }));
}

export const categoryLabels: Record<string, string> = {
  epilator: '脱毛器・光美容器',
  'face-device': '美顔器・RF・EMS',
  'hair-dryer': 'ドライヤー',
  'skin-care': 'スキンケア家電',
};
