import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Star, CheckCircle, XCircle } from 'lucide-react';
import { getProductBySlug, products } from '@/data/products';
import { formatPrice, ratingStars } from '@/lib/utils';
import CTAButton from '@/components/CTAButton';
import ProductJsonLd from '@/components/ProductJsonLd';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} 口コミ・レビュー2025`,
    description: `${product.name}を実際に使用したレビュー。メリット・デメリット、スペック、競合比較まで徹底解説。`,
    openGraph: {
      title: `${product.name} 口コミ・レビュー2025`,
      images: [{ url: product.imageUrl }],
    },
  };
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ReviewPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const stars = ratingStars(product.rating);
  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <ProductJsonLd product={product} />
      {/* Header */}
      <header className="mb-8">
        <p className="text-xs text-gray-400 mb-2">
          ※本記事にはアフィリエイト広告が含まれます ／ 最終更新：2025年6月
        </p>
        <p className="text-sm text-rose-400 font-medium mb-2">{product.brand}</p>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 leading-snug">
          {product.name} 口コミ・レビュー2025！実際に使って分かったメリット・デメリット
        </h1>

        {/* Rating */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex">
            {stars.map((s, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${s.filled ? 'fill-amber-400 text-amber-400' : 'fill-gray-200 text-gray-200'}`}
              />
            ))}
          </div>
          <span className="font-bold text-gray-800">{product.rating}</span>
          <span className="text-sm text-gray-400">（{product.reviewCount.toLocaleString()}件のレビューより）</span>
        </div>

        <p className="text-gray-600 leading-relaxed">{product.description}</p>
      </header>

      {/* First CTA */}
      <div className="bg-rose-50 rounded-2xl p-6 border border-rose-100 mb-10">
        <p className="font-bold text-gray-800 text-center mb-1">
          {product.name}の最安値をチェック
        </p>
        {product.originalPrice && (
          <p className="text-center text-sm text-gray-500 mb-4">
            <span className="line-through">{formatPrice(product.originalPrice)}</span>
            <span className="text-red-500 font-bold ml-2">→ {formatPrice(product.price)}〜</span>
            {discount && <span className="ml-1 text-red-500">({discount}%OFF)</span>}
          </p>
        )}
        <div className="space-y-2 max-w-sm mx-auto">
          {product.affiliateUrls.amazon && (
            <CTAButton href={product.affiliateUrls.amazon} variant="amazon">
              Amazonで価格を確認する
            </CTAButton>
          )}
          {product.affiliateUrls.rakuten && (
            <CTAButton href={product.affiliateUrls.rakuten} variant="rakuten">
              楽天で価格を確認する
            </CTAButton>
          )}
          {product.affiliateUrls.official && (
            <CTAButton href={product.affiliateUrls.official} variant="official">
              公式サイトで購入する
            </CTAButton>
          )}
        </div>
      </div>

      {/* Product Image */}
      <div className="relative h-64 bg-gray-50 rounded-2xl overflow-hidden mb-10">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-contain p-6"
          priority
        />
      </div>

      {/* Specs Table */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-800 mb-4">基本スペック</h2>
        <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
          <table className="w-full text-sm">
            <tbody>
              {Object.entries(product.specs).map(([key, val], i) => (
                <tr key={key} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 font-medium text-gray-600 w-36 border-r border-gray-100">
                    {key}
                  </td>
                  <td className="px-4 py-3 text-gray-800">{val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Pros & Cons */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-800 mb-6">メリット・デメリット</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 rounded-2xl p-5 border border-green-100">
            <h3 className="font-bold text-green-700 mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" /> メリット
            </h3>
            <ul className="space-y-3">
              {product.pros.map((pro) => (
                <li key={pro} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-red-50 rounded-2xl p-5 border border-red-100">
            <h3 className="font-bold text-red-600 mb-4 flex items-center gap-2">
              <XCircle className="w-5 h-5" /> デメリット
            </h3>
            <ul className="space-y-3">
              {product.cons.map((con) => (
                <li key={con} className="flex items-start gap-2 text-sm text-gray-700">
                  <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Article body sections */}
      {product.articleSections && product.articleSections.length > 0 && (
        <div className="mb-10 space-y-10">
          {product.articleSections.map((section) => (
            <section key={section.h2}>
              <h2 className="text-xl font-bold text-gray-800 mb-5 pb-2 border-b-2 border-rose-100">
                {section.h2}
              </h2>
              <div className="space-y-4">
                {section.paragraphs.map((p, i) => (
                  <p key={i} className="text-gray-700 leading-8 text-sm">
                    {p}
                  </p>
                ))}
              </div>
              {section.tip && (
                <div className="mt-5 bg-amber-50 border-l-4 border-amber-400 rounded-r-xl px-5 py-4">
                  <p className="text-sm font-bold text-amber-700 mb-1">💡 使い方のコツ</p>
                  <p className="text-sm text-amber-800 leading-relaxed">{section.tip}</p>
                </div>
              )}
              {section.warning && (
                <div className="mt-5 bg-red-50 border-l-4 border-red-400 rounded-r-xl px-5 py-4">
                  <p className="text-sm font-bold text-red-600 mb-1">⚠️ 注意事項</p>
                  <p className="text-sm text-red-700 leading-relaxed">{section.warning}</p>
                </div>
              )}
            </section>
          ))}
        </div>
      )}

      {/* Who is it for（articleSectionsがない商品のフォールバック） */}
      {!product.articleSections && (
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">こんな人におすすめ</h2>
          <div className="bg-rose-50 rounded-2xl p-5 border border-rose-100">
            <ul className="space-y-2">
              {product.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-gray-700">
                  <span className="w-2 h-2 bg-rose-400 rounded-full flex-shrink-0" />
                  {f}を重視する方
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 border border-rose-100">
        <h2 className="text-xl font-bold text-gray-800 text-center mb-2">
          {product.name}を購入する
        </h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          価格比較して最安値でゲットしよう
        </p>
        <div className="space-y-3 max-w-sm mx-auto">
          {product.affiliateUrls.amazon && (
            <CTAButton href={product.affiliateUrls.amazon} variant="amazon" size="lg">
              Amazonで購入する（最安値を確認）
            </CTAButton>
          )}
          {product.affiliateUrls.rakuten && (
            <CTAButton href={product.affiliateUrls.rakuten} variant="rakuten" size="lg">
              楽天で購入する（ポイント還元あり）
            </CTAButton>
          )}
          {product.affiliateUrls.official && (
            <CTAButton href={product.affiliateUrls.official} variant="official">
              公式サイトで購入する
            </CTAButton>
          )}
        </div>
        <p className="text-xs text-gray-400 text-center mt-4">
          ※価格は記事執筆時点のものです。最新価格は各リンクからご確認ください。
        </p>
      </section>
    </article>
  );
}
