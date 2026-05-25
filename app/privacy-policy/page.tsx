import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: '美容家電NAVIのプライバシーポリシー。個人情報の取り扱い、Cookieの使用、アフィリエイトについて説明します。',
  robots: { index: true, follow: false },
};

const SITE_NAME = '美容家電NAVI';
const CONTACT_EMAIL = 'contact@beauty-denki-navi.com'; // ← 実際のメアドに変更

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">プライバシーポリシー</h1>
      <p className="text-sm text-gray-400 mb-10">最終更新日：2025年1月1日</p>

      <div className="prose prose-gray max-w-none space-y-8 text-sm text-gray-700 leading-relaxed">

        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-3">1. 基本方針</h2>
          <p>
            {SITE_NAME}（以下「当サイト」）は、ユーザーの個人情報の保護を重要な責務と考えており、
            個人情報の保護に関する法律（個人情報保護法）を遵守します。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-3">2. 広告について（アフィリエイト）</h2>
          <p>当サイトは以下のアフィリエイトプログラムに参加しています。</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Amazonアソシエイト・プログラム（Amazon Services LLC Associates Program）</li>
            <li>楽天アフィリエイト</li>
            <li>A8.net</li>
            <li>もしもアフィリエイト</li>
            <li>バリューコマース</li>
          </ul>
          <p className="mt-3">
            これらのプログラムを通じて、当サイト経由で商品をご購入いただいた場合に
            紹介料が発生することがあります。なお、読者の方が支払う価格には影響しません。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-3">3. アクセス解析ツール（Google Analytics）</h2>
          <p>
            当サイトでは、アクセス解析のためにGoogle LLC提供のGoogle Analytics（GA4）を使用しています。
            Google Analyticsはトラフィックデータの収集のためにCookieを使用しています。
            このデータは匿名で収集されており、個人を特定するものではありません。
          </p>
          <p className="mt-2">
            Google Analyticsのデータ収集を拒否したい場合は、
            <a
              href="https://tools.google.com/dlpage/gaoptout/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-400 underline ml-1"
            >
              Google Analytics オプトアウトアドオン
            </a>
            をご利用ください。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-3">4. Cookieの使用</h2>
          <p>
            当サイトでは、利便性の向上のためCookieを使用しています。
            ブラウザの設定によりCookieを無効にすることができますが、
            一部のサービスが正常に動作しない場合があります。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-3">5. 掲載情報の正確性</h2>
          <p>
            当サイトに掲載する情報は正確を期しておりますが、
            商品の価格・スペック・在庫状況は予告なく変更されることがあります。
            最新情報は各販売ページにてご確認ください。
            当サイトの情報を利用したことで生じた損害について、当サイトは責任を負いません。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-3">6. 著作権</h2>
          <p>
            当サイトに掲載されているテキスト・画像等の著作権は、
            当サイト運営者または正当な権利者に帰属します。
            無断転載・複製を禁じます。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-3">7. プライバシーポリシーの変更</h2>
          <p>
            当サイトは、法令の変更等に伴い本ポリシーを変更することがあります。
            変更後のポリシーは本ページに掲載した時点で効力を生じるものとします。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-gray-800 mb-3">8. お問い合わせ</h2>
          <p>
            本ポリシーに関するお問い合わせは下記までご連絡ください。
            <br />
            メールアドレス：
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-rose-400 underline ml-1">
              {CONTACT_EMAIL}
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
