import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Zap, Star, TrendingUp } from 'lucide-react';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';

export const metadata: Metadata = {
  title: '美容家電NAVI | 30・40代女性のための美容家電比較サイト',
  description:
    '脱毛器・美顔器・ドライヤーを徹底比較。30・40代女性が本当に使える美容家電をランキング形式で紹介。',
  openGraph: {
    title: '美容家電NAVI | 30・40代女性のための美容家電比較サイト',
    description: '脱毛器・美顔器・ドライヤーを徹底比較。',
    url: '/',
  },
};

export default function Home() {
  const recommended = products.filter((p) => p.isRecommended);

  return (
    <>
      <Hero />

      {/* Category Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
            カテゴリから探す
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={cat.href}
                className="group p-6 bg-rose-50 hover:bg-rose-100 rounded-2xl text-center transition-colors"
              >
                <div className="text-3xl mb-3">{cat.icon}</div>
                <h3 className="font-bold text-gray-800 mb-1 group-hover:text-rose-500 transition-colors text-sm">
                  {cat.label}
                </h3>
                <p className="text-xs text-gray-500">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Star className="w-6 h-6 text-amber-400 fill-amber-400" />
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">編集部イチオシ商品</h2>
            </div>
            <Link
              href="/ranking"
              className="flex items-center gap-1 text-sm text-rose-400 hover:text-rose-500 font-medium transition-colors"
            >
              全ランキングを見る
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommended.map((product) => (
              <ProductCard key={product.id} product={product} showRank />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            なぜ美容家電NAVIが選ばれるのか
          </h2>
          <p className="text-gray-500 mb-12">
            実際に購入・使用した経験に基づく、信頼性の高い情報をお届けします
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8 text-rose-400" />,
                title: '実際に購入してレビュー',
                desc: '紹介する商品はすべて実際に購入・使用し、リアルな使用感をお伝えします。',
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-rose-400" />,
                title: '定期的な情報更新',
                desc: '最新モデルの発売・価格変動に合わせて、情報を常に最新の状態に更新しています。',
              },
              {
                icon: <Star className="w-8 h-8 text-rose-400 fill-rose-400" />,
                title: '中立的な比較評価',
                desc: 'メーカーからの依頼ではなく、独自の評価基準で公平な比較を行っています。',
              },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-rose-50 rounded-2xl text-left">
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
