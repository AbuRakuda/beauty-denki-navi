import type { Metadata } from 'next';
import { products } from '@/data/products';
import ClientComparisonTable from '@/components/ClientComparisonTable';

export const metadata: Metadata = {
  title: '美容家電 比較表 | 価格・評価を並び替えて比較',
  description:
    '脱毛器・美顔器・ドライヤーの価格・評価・口コミ数を一覧比較。並び替え機能付き。',
};

export default function ComparePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">美容家電 比較表</h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          価格・評価・口コミ数でソートして比較できます。
          ヘッダーをクリックして並び替えてください。
        </p>
        <p className="text-xs text-gray-400 mt-2">※本ページにはアフィリエイト広告が含まれます</p>
      </div>

      <ClientComparisonTable products={products} />

      <p className="text-xs text-gray-400 mt-4 text-center">
        ※価格は記事執筆時点のものです。最新価格は各購入リンクからご確認ください。
      </p>
    </div>
  );
}
