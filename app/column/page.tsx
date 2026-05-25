import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, ChevronRight } from 'lucide-react';
import { articles } from '@/data/articles';

export const metadata: Metadata = {
  title: '美容家電コラム一覧 | 脱毛器・美顔器・ドライヤーの選び方ガイド',
  description:
    '脱毛器・美顔器・ドライヤーの選び方・比較・使い方を解説するコラム一覧。30・40代女性が本当に知りたい情報をわかりやすくまとめています。',
};

const categoryLabel: Record<string, string> = {
  epilator: '脱毛器',
  'face-device': '美顔器',
  'hair-dryer': 'ドライヤー',
  general: '美容家電',
};

const categoryColor: Record<string, string> = {
  epilator: 'bg-rose-100 text-rose-500',
  'face-device': 'bg-purple-100 text-purple-500',
  'hair-dryer': 'bg-sky-100 text-sky-500',
  general: 'bg-gray-100 text-gray-500',
};

export default function ColumnIndexPage() {
  const sorted = [...articles].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime(),
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <p className="text-sm text-rose-400 font-medium mb-2">選び方ガイド</p>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          美容家電コラム
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          脱毛器・美顔器・ドライヤーを実際に使った経験から、選び方・比較・使い方を詳しく解説します。
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {sorted.map((article) => (
          <Link
            key={article.slug}
            href={`/column/${article.slug}`}
            className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryColor[article.category] ?? 'bg-gray-100 text-gray-500'}`}
                  >
                    {categoryLabel[article.category] ?? '美容家電'}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <Calendar className="w-3 h-3" />
                    {article.publishDate.replace(/-/g, '/')}
                  </span>
                </div>
                <h2 className="font-bold text-gray-800 leading-snug mb-2 group-hover:text-rose-500 transition-colors">
                  {article.title}
                </h2>
                <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
                  {article.metaDescription}
                </p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-300 shrink-0 mt-1 group-hover:text-rose-400 transition-colors" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
