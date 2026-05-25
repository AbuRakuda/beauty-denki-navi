import type { Metadata } from 'next';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import CTAButton from '@/components/CTAButton';
import ClientComparisonTable from '@/components/ClientComparisonTable';

export const metadata: Metadata = {
  title: '美容家電ランキング2025 | 脱毛器・美顔器・ドライヤー人気TOP',
  description:
    '30・40代女性が選ぶ美容家電ランキング。脱毛器・美顔器・ドライヤーを実際に使って比較した結果を公開。',
};

export default function RankingPage() {
  const epilators = products
    .filter((p) => p.category === 'epilator' && p.rank)
    .sort((a, b) => (a.rank ?? 99) - (b.rank ?? 99));

  const hairDryers = products
    .filter((p) => p.category === 'hair-dryer' && p.rank)
    .sort((a, b) => (a.rank ?? 99) - (b.rank ?? 99));

  const faceDevices = products
    .filter((p) => p.category === 'face-device' && p.rank)
    .sort((a, b) => (a.rank ?? 99) - (b.rank ?? 99));

  const allRanked = [...epilators, ...faceDevices, ...hairDryers];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-sm text-rose-400 font-medium mb-2">2025年最新版</p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          美容家電おすすめランキング
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          実際に購入・使用した美容家電を、価格・性能・使いやすさで総合評価。
          あなたに合う1台を見つけよう。
        </p>
        <p className="text-xs text-gray-400 mt-2">※本記事にはアフィリエイト広告が含まれます</p>
      </div>

      {/* 脱毛器ランキング */}
      <section className="mb-16">
        <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <span className="text-2xl">✨</span> 脱毛器・光美容器ランキング
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {epilators.map((p) => (
            <ProductCard key={p.id} product={p} showRank />
          ))}
        </div>

        {/* Mid-article CTA */}
        <div className="bg-rose-50 rounded-2xl p-6 border border-rose-100">
          <p className="text-center font-bold text-gray-800 mb-4">
            迷ったらこれ！脱毛器ランキング1位は<span className="text-rose-400">ケノン</span>
          </p>
          <div className="max-w-md mx-auto space-y-2">
            <CTAButton href="https://www.amazon.co.jp/s?k=ケノン" variant="amazon">
              Amazonでケノンの価格を確認する
            </CTAButton>
            <CTAButton href="https://search.rakuten.co.jp/search/mall/ケノン/" variant="rakuten">
              楽天でケノンの価格を確認する
            </CTAButton>
          </div>
        </div>
      </section>

      {/* 美顔器ランキング */}
      <section className="mb-16">
        <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <span className="text-2xl">💆</span> 美顔器・RF・EMSランキング
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {faceDevices.map((p) => (
            <ProductCard key={p.id} product={p} showRank />
          ))}
        </div>
      </section>

      {/* ドライヤーランキング */}
      <section className="mb-16">
        <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          <span className="text-2xl">💨</span> ドライヤーランキング
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hairDryers.map((p) => (
            <ProductCard key={p.id} product={p} showRank />
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section>
        <h2 className="text-xl font-bold text-gray-800 mb-4">全商品スペック比較表</h2>
        <p className="text-sm text-gray-500 mb-6">
          価格・評価・口コミ数で並び替え可能。ヘッダーをクリックしてソートしてください。
        </p>
        <ClientComparisonTable products={allRanked} />
        <p className="text-xs text-gray-400 mt-3 text-center">
          ※価格は記事執筆時点のものです。最新価格は各購入リンクからご確認ください。
        </p>
      </section>
    </div>
  );
}
