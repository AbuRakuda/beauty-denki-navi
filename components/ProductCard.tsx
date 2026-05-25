import Image from 'next/image';
import Link from 'next/link';
import { Star, ExternalLink } from 'lucide-react';
import { Product } from '@/types';
import { formatPrice, calcDiscount, ratingStars } from '@/lib/utils';
import CTAButton from './CTAButton';

interface ProductCardProps {
  product: Product;
  showRank?: boolean;
}

export default function ProductCard({ product, showRank = false }: ProductCardProps) {
  const discount = product.originalPrice
    ? calcDiscount(product.price, product.originalPrice)
    : null;
  const stars = ratingStars(product.rating);

  const rankColors: Record<number, string> = {
    1: 'bg-amber-400',
    2: 'bg-slate-400',
    3: 'bg-amber-700',
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col">
      {showRank && product.rank && (
        <div
          className={`px-3 py-1.5 text-center text-sm font-bold text-white ${rankColors[product.rank] ?? 'bg-gray-400'}`}
        >
          {product.badge ?? `第${product.rank}位`}
        </div>
      )}

      <div className="relative h-48 bg-gray-50 overflow-hidden group">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {discount && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            {discount}%OFF
          </div>
        )}
        {product.isRecommended && (
          <div className="absolute top-3 right-3 bg-rose-400 text-white text-xs font-bold px-2 py-1 rounded-full">
            編集部イチオシ
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <p className="text-xs text-rose-400 font-medium mb-1">{product.brand}</p>
        <h3 className="font-bold text-gray-800 mb-2 line-clamp-2 leading-snug text-sm">
          {product.name}
        </h3>
        <p className="text-xs text-gray-500 mb-3 line-clamp-2">{product.catchCopy}</p>

        <div className="flex items-center gap-2 mb-3">
          <div className="flex">
            {stars.map((s, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${s.filled ? 'fill-amber-400 text-amber-400' : 'fill-gray-200 text-gray-200'}`}
              />
            ))}
          </div>
          <span className="text-sm font-bold text-gray-700">{product.rating}</span>
          <span className="text-xs text-gray-400">({product.reviewCount.toLocaleString()}件)</span>
        </div>

        <div className="mb-4">
          {product.originalPrice && (
            <p className="text-xs text-gray-400 line-through">{formatPrice(product.originalPrice)}</p>
          )}
          <p className="text-xl font-bold text-gray-800">
            {formatPrice(product.price)}
            <span className="text-sm font-normal text-gray-500 ml-1">〜</span>
          </p>
        </div>

        <ul className="mb-4 space-y-1">
          {product.features.slice(0, 3).map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs text-gray-600">
              <span className="w-1.5 h-1.5 bg-rose-400 rounded-full flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        <div className="space-y-2 mt-auto">
          {product.affiliateUrls.amazon && (
            <CTAButton href={product.affiliateUrls.amazon} variant="amazon" size="sm">
              Amazonで価格を見る
            </CTAButton>
          )}
          {product.affiliateUrls.rakuten && (
            <CTAButton href={product.affiliateUrls.rakuten} variant="rakuten" size="sm">
              楽天で価格を見る
            </CTAButton>
          )}
        </div>

        <Link
          href={`/reviews/${product.slug}`}
          className="mt-3 flex items-center justify-center gap-1 text-xs text-gray-400 hover:text-rose-400 transition-colors"
        >
          詳細レビューを読む
          <ExternalLink className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}
