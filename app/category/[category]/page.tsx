import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProductsByCategory } from '@/data/products';
import { categoryLabels } from '@/lib/utils';
import ProductCard from '@/components/ProductCard';
import { Category } from '@/types';

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const label = categoryLabels[category] ?? category;
  return {
    title: `${label}おすすめランキング2025`,
    description: `${label}の比較・ランキング。30・40代女性が実際に使ったレビューと口コミ。`,
  };
}

export function generateStaticParams() {
  return [
    { category: 'epilator' },
    { category: 'face-device' },
    { category: 'hair-dryer' },
    { category: 'skin-care' },
  ];
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const label = categoryLabels[category];

  if (!label) notFound();

  const categoryProducts = getProductsByCategory(category as Category);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-10">
        <p className="text-sm text-rose-400 font-medium mb-2">2025年最新版</p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          {label} おすすめランキング
        </h1>
        <p className="text-gray-500">
          実際に購入・使用した{label}を比較。あなたに合う1台を見つけよう。
        </p>
        <p className="text-xs text-gray-400 mt-2">※本記事にはアフィリエイト広告が含まれます</p>
      </div>

      {categoryProducts.length === 0 ? (
        <div className="text-center py-24 text-gray-400">
          <p className="text-lg">このカテゴリの商品は準備中です。</p>
          <p className="text-sm mt-2">近日公開予定！</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} showRank />
          ))}
        </div>
      )}
    </div>
  );
}
