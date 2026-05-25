import type { Metadata } from 'next';
import { Mail, Clock, AlertCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description: '美容家電NAVIへのお問い合わせページ。掲載内容の誤りや、ご意見・ご要望はこちらからどうぞ。',
};

// Formspree のフォームID（https://formspree.io で無料取得）
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? '';

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">お問い合わせ</h1>
      <p className="text-gray-500 mb-8 text-sm">
        掲載内容への誤りの指摘、ご意見・ご要望などお気軽にどうぞ。
      </p>

      {/* 注意事項 */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 flex gap-3">
        <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-amber-800">
          <p className="font-bold mb-1">ご確認ください</p>
          <ul className="space-y-1 list-disc pl-4">
            <li>個別の商品選びに関するご相談はお答えできない場合があります</li>
            <li>返信まで3〜5営業日かかることがあります</li>
            <li>メーカーへのお問い合わせは各メーカーの公式サポートへご連絡ください</li>
          </ul>
        </div>
      </div>

      {/* フォーム */}
      <form
        action={FORMSPREE_ID ? `https://formspree.io/f/${FORMSPREE_ID}` : '#'}
        method="POST"
        className="space-y-6 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
            お名前 <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="山田 花子"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
            メールアドレス <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="_replyto"
            required
            placeholder="example@email.com"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">
            お問い合わせ種別
          </label>
          <select
            id="subject"
            name="subject"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition bg-white"
          >
            <option value="content">掲載内容に関する指摘</option>
            <option value="suggest">記事リクエスト・ご提案</option>
            <option value="business">ビジネス・取材に関するお問い合わせ</option>
            <option value="other">その他</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
            お問い合わせ内容 <span className="text-red-400">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={6}
            placeholder="お問い合わせ内容をご記入ください..."
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition resize-none"
          />
        </div>

        {/* Formspree スパム対策 */}
        <input type="text" name="_gotcha" className="hidden" />
        <input type="hidden" name="_subject" value="美容家電NAVIへのお問い合わせ" />
        <input type="hidden" name="_language" value="ja" />

        <button
          type="submit"
          className="w-full bg-rose-400 hover:bg-rose-500 text-white font-bold py-4 rounded-xl transition-colors shadow-md"
        >
          送信する
        </button>

        {!FORMSPREE_ID && (
          <p className="text-xs text-center text-amber-600">
            ※ 現在フォームID未設定のためメール送信できません。
            <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" className="underline ml-1">
              Formspree
            </a>
            で無料取得後、NEXT_PUBLIC_FORMSPREE_IDを設定してください。
          </p>
        )}
      </form>

      {/* 返信期間の目安 */}
      <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
        <Clock className="w-4 h-4" />
        <span>通常3〜5営業日以内にご返信します</span>
      </div>

      <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
        <Mail className="w-4 h-4" />
        <span>メールでのご連絡：contact@beauty-denki-navi.com</span>
      </div>
    </div>
  );
}
