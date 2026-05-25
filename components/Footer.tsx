import Link from 'next/link';
import { Sparkles } from 'lucide-react';

const categoryLinks = [
  { href: '/category/epilator', label: '脱毛器・光美容器' },
  { href: '/category/face-device', label: '美顔器・RF・EMS' },
  { href: '/category/hair-dryer', label: 'ドライヤー' },
  { href: '/category/skin-care', label: 'スキンケア家電' },
];

const siteLinks = [
  { href: '/ranking', label: 'ランキング' },
  { href: '/compare', label: '商品比較' },
  { href: '/about', label: 'このサイトについて' },
  { href: '/privacy-policy', label: 'プライバシーポリシー' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-rose-400" />
              <span className="text-lg font-bold text-white">美容家電NAVI</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-3">
              30・40代女性のための美容家電比較サイト。実際に購入・使用した経験を基に、中立的な情報をお届けします。
            </p>
            <p className="text-xs text-gray-500">
              ※本サイトはA8.net・Amazonアソシエイト・楽天アフィリエイト等のアフィリエイト広告を利用しています。
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white mb-4">カテゴリ</h3>
            <ul className="space-y-2 text-sm">
              {categoryLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-rose-300 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white mb-4">サイト情報</h3>
            <ul className="space-y-2 text-sm">
              {siteLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-rose-300 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
          © 2025 美容家電NAVI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
