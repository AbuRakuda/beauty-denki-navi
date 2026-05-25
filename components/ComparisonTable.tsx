'use client';

import { useState, useCallback } from 'react';
import { ChevronUp, ChevronDown, ChevronsUpDown } from 'lucide-react';
import Image from 'next/image';
import { Product, SortKey, SortOrder } from '@/types';
import { sortProducts, formatPrice } from '@/lib/utils';
import CTAButton from './CTAButton';

interface ComparisonTableProps {
  products: Product[];
}

export default function ComparisonTable({ products: initialProducts }: ComparisonTableProps) {
  const [sortKey, setSortKey] = useState<SortKey>('rating');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');

  const handleSort = useCallback(
    (key: SortKey) => {
      if (sortKey === key) {
        setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
      } else {
        setSortKey(key);
        setSortOrder('desc');
      }
    },
    [sortKey],
  );

  const sorted = sortProducts(initialProducts, sortKey, sortOrder);

  function SortIcon({ col }: { col: SortKey }) {
    if (sortKey !== col) return <ChevronsUpDown className="w-4 h-4 text-gray-400" />;
    return sortOrder === 'asc' ? (
      <ChevronUp className="w-4 h-4 text-rose-400" />
    ) : (
      <ChevronDown className="w-4 h-4 text-rose-400" />
    );
  }

  function ColHeader({ col, label }: { col: SortKey; label: string }) {
    return (
      <button
        onClick={() => handleSort(col)}
        className="flex items-center gap-1 hover:text-rose-500 transition-colors w-full justify-center"
      >
        {label}
        <SortIcon col={col} />
      </button>
    );
  }

  return (
    <div className="overflow-x-auto rounded-2xl shadow-md border border-gray-100">
      <table className="w-full min-w-[680px] bg-white text-sm">
        <thead>
          <tr className="bg-rose-50 border-b border-rose-100">
            <th className="px-4 py-3 text-left font-bold text-gray-700 w-56">商品名</th>
            <th className="px-4 py-3 font-bold text-gray-700">
              <ColHeader col="price" label="価格" />
            </th>
            <th className="px-4 py-3 font-bold text-gray-700">
              <ColHeader col="rating" label="評価" />
            </th>
            <th className="px-4 py-3 font-bold text-gray-700">
              <ColHeader col="reviewCount" label="口コミ数" />
            </th>
            <th className="px-4 py-3 font-bold text-gray-700 text-center w-44">購入リンク</th>
          </tr>
        </thead>
        <tbody>
          {sorted.map((product, i) => (
            <tr
              key={product.id}
              className={`border-b border-gray-50 hover:bg-rose-50/40 transition-colors ${
                i % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'
              }`}
            >
              <td className="px-4 py-4">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 flex-shrink-0 bg-gray-50 rounded-lg overflow-hidden">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      fill
                      className="object-contain p-1"
                      sizes="48px"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-rose-400 font-medium">{product.brand}</p>
                    <p className="font-bold text-gray-800 leading-tight line-clamp-2 text-xs">
                      {product.name}
                    </p>
                    {product.badge && (
                      <span className="inline-block text-xs bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded-full mt-1">
                        {product.badge}
                      </span>
                    )}
                  </div>
                </div>
              </td>

              <td className="px-4 py-4 text-center">
                <p className="font-bold text-gray-800">{formatPrice(product.price)}</p>
                {product.originalPrice && (
                  <p className="text-xs text-gray-400 line-through">
                    {formatPrice(product.originalPrice)}
                  </p>
                )}
              </td>

              <td className="px-4 py-4 text-center">
                <p className="font-bold text-amber-500 text-base">{product.rating}</p>
                <p className="text-xs text-gray-400">/ 5.0</p>
              </td>

              <td className="px-4 py-4 text-center">
                <p className="text-gray-700">{product.reviewCount.toLocaleString()}件</p>
              </td>

              <td className="px-4 py-4">
                <div className="space-y-1.5">
                  {product.affiliateUrls.amazon && (
                    <CTAButton href={product.affiliateUrls.amazon} variant="amazon" size="sm">
                      Amazon
                    </CTAButton>
                  )}
                  {product.affiliateUrls.rakuten && (
                    <CTAButton href={product.affiliateUrls.rakuten} variant="rakuten" size="sm">
                      楽天
                    </CTAButton>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
