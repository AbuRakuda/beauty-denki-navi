import Link from 'next/link';
import { ChevronRight, Star, Shield, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 text-sm text-rose-500 font-medium shadow-sm mb-6">
          <Star className="w-4 h-4 fill-rose-400 text-rose-400" />
          30・40代女性に選ばれる美容家電比較サイト
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
          美容家電を<span className="text-rose-400">賢く選ぶ</span>なら
          <br />
          <span className="text-rose-400">美容家電NAVI</span>
        </h1>

        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          脱毛器・美顔器・ドライヤーを実際に購入・使用して徹底比較。
          <br className="hidden md:block" />
          あなたに合う1台を見つけよう。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/ranking"
            className="inline-flex items-center justify-center gap-2 bg-rose-400 hover:bg-rose-500 text-white font-bold py-4 px-8 rounded-full transition-colors shadow-lg"
          >
            ランキングを見る
            <ChevronRight className="w-5 h-5" />
          </Link>
          <Link
            href="/compare"
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-bold py-4 px-8 rounded-full transition-colors border border-gray-200 shadow-sm"
          >
            商品を比較する
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-green-500" />
            <span>PR・アフィリエイト広告あり</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-500" />
            <span>実際に購入・使用してレビュー</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-rose-400" />
            <span>最終更新：2025年6月</span>
          </div>
        </div>
      </div>
    </section>
  );
}
