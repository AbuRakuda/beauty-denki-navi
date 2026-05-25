import type { Metadata } from 'next';
import { Shield, Star, Clock, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'このサイトについて・運営者情報',
  description: '美容家電NAVIの運営者情報、サイトの目的、レビューポリシーについて説明します。',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">このサイトについて</h1>
      <p className="text-gray-500 mb-10 text-sm">運営者情報・レビューポリシー</p>

      {/* 運営者プロフィール */}
      <section className="bg-rose-50 rounded-2xl p-8 mb-10 border border-rose-100">
        <div className="flex items-start gap-6">
          <div className="w-20 h-20 rounded-full bg-rose-200 flex items-center justify-center flex-shrink-0 text-3xl">
            🌸
          </div>
          <div>
            <p className="text-xs text-rose-400 font-medium mb-1">運営者</p>
            <h2 className="text-xl font-bold text-gray-800 mb-1">
              ゆか（仮名）
            </h2>
            <p className="text-sm text-gray-500 mb-3">30代 ／ 2児の母 ／ 元美容部員</p>
            <p className="text-sm text-gray-700 leading-relaxed">
              美容部員として5年間勤務後、結婚・出産を機に退職。
              サロンに通う時間もお金もなくなった経験から、自宅で使える美容家電に目覚め、
              これまで30台以上の美容家電を購入・使用してきました。
              <br /><br />
              「失敗して無駄なお金を使ってほしくない」という思いから、
              実際に買って使った正直な情報をお届けするため、このサイトを立ち上げました。
            </p>
          </div>
        </div>
      </section>

      {/* サイトの方針 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-800 mb-6">レビュー・掲載ポリシー</h2>
        <div className="space-y-4">
          {[
            {
              icon: <Star className="w-5 h-5 text-amber-400 fill-amber-400" />,
              title: '実際に購入・使用した商品のみ紹介',
              desc: '当サイトで紹介する商品は、すべて自費で購入し実際に使用したものです。メーカーや代理店から無償提供を受けた商品は、その旨を明記しています。',
            },
            {
              icon: <Shield className="w-5 h-5 text-green-500" />,
              title: 'アフィリエイト広告の開示',
              desc: '当サイトはA8.net、Amazonアソシエイト、楽天アフィリエイト等のアフィリエイトプログラムに参加しています。商品リンクからご購入いただいた場合、当サイトに報酬が発生することがあります。ただし、これが掲載内容に影響することはありません。',
            },
            {
              icon: <Clock className="w-5 h-5 text-blue-400" />,
              title: '情報の定期更新',
              desc: '商品の価格・スペックは変更されることがあります。当サイトでは最新情報への更新に努めていますが、購入前に必ず各販売ページでご確認ください。',
            },
            {
              icon: <Heart className="w-5 h-5 text-rose-400" />,
              title: '中立的な評価',
              desc: 'メリットだけでなくデメリットも正直にお伝えします。「おすすめしない人」の記載もその一環です。読者の皆さんに後悔のない買い物をしていただくことが当サイトの目標です。',
            },
          ].map((item) => (
            <div key={item.title} className="flex gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm">
              <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
              <div>
                <h3 className="font-bold text-gray-800 mb-1 text-sm">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 連絡先 */}
      <section className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
        <h2 className="text-lg font-bold text-gray-800 mb-3">お問い合わせ</h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          掲載内容に誤りを発見された場合や、ご意見・ご要望がございましたら、
          お問い合わせフォームよりご連絡ください。
          <br />
          ※ 個別の商品選びに関するご質問はお答えできない場合があります。
        </p>
        <p className="text-xs text-gray-400 mt-3">
          運営者名：ゆか（個人運営）／ 開設：2025年1月
        </p>
      </section>
    </div>
  );
}
