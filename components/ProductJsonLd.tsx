import { Product } from '@/types';

export default function ProductJsonLd({ product }: { product: Product }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    brand: { '@type': 'Brand', name: product.brand },
    description: product.description,
    image: `https://beauty-denki-navi.com${product.imageUrl}`,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'JPY',
      price: product.price,
      availability: 'https://schema.org/InStock',
      url: product.affiliateUrls.amazon ?? product.affiliateUrls.rakuten ?? '',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
