import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics';

export const metadata: Metadata = {
  metadataBase: new URL('https://beauty-denki-navi.com'),
  title: {
    default: '美容家電NAVI | 30・40代女性のための美容家電比較サイト',
    template: '%s | 美容家電NAVI',
  },
  description:
    '30・40代女性向け美容家電の比較・ランキング・レビューサイト。脱毛器・美顔器・ドライヤーを実際に使って徹底比較。',
  keywords: ['美容家電', '脱毛器', '美顔器', 'ドライヤー', 'おすすめ', '比較', '口コミ', '30代', '40代'],
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: '美容家電NAVI',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: '美容家電NAVI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '美容家電NAVI',
    description: '30・40代女性向け美容家電比較サイト',
  },
  robots: { index: true, follow: true },
  verification: {
    google: 'wwrFYfhse_1xNE_8oO54t-Nc0730gM0-ny7GSbzXt4k',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen flex flex-col">
        <GoogleAnalytics />
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
