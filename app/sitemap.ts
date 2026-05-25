import { MetadataRoute } from 'next';
import { products } from '@/data/products';
import { articles } from '@/data/articles';

const BASE_URL = 'https://beauty-denki-navi.com';

const CATEGORIES = ['epilator', 'face-device', 'hair-dryer', 'skin-care'];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/ranking`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/compare`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/column`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
  ];

  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `${BASE_URL}/category/${cat}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const reviewPages: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${BASE_URL}/reviews/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const columnPages: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${BASE_URL}/column/${a.slug}`,
    lastModified: new Date(a.updatedDate),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticPages, ...categoryPages, ...reviewPages, ...columnPages];
}
