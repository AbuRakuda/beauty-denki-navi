import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import { articles, getArticleBySlug } from '@/data/articles';
import { getProductBySlug } from '@/data/products';
import CTAButton from '@/components/CTAButton';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
    },
  };
}

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

const categoryLabel: Record<string, string> = {
  epilator: '脱毛器',
  'face-device': '美顔器',
  'hair-dryer': 'ドライヤー',
  general: '美容家電',
};

export default async function ColumnPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const relatedProducts = article.relatedProductSlugs
    .map((s) => getProductBySlug(s))
    .filter(Boolean);

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1 text-xs text-gray-400 mb-6">
        <Link href="/" className="hover:text-rose-400">トップ</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href="/column" className="hover:text-rose-400">コラム</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-gray-600 truncate">{article.title}</span>
      </nav>

      {/* Header */}
      <header className="mb-8">
        <p className="text-xs text-gray-400 mb-2">
          ※本記事にはアフィリエイト広告が含まれます
        </p>
        <span className="inline-block text-xs bg-rose-100 text-rose-500 font-medium px-3 py-1 rounded-full mb-3">
          {categoryLabel[article.category] ?? '美容家電'}
        </span>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 leading-snug">
          {article.title}
        </h1>
        <div className="flex items-center gap-4 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            公開: {article.publishDate.replace(/-/g, '/')}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            更新: {article.updatedDate.replace(/-/g, '/')}
          </span>
        </div>
      </header>

      {/* Author note */}
      <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100 mb-8 text-sm text-gray-600 leading-relaxed">
        <p className="font-medium text-gray-700 mb-1">この記事を書いた人</p>
        <p>
          30代・2児のママ。産後のムダ毛ケアをきっかけに4台の家庭用脱毛器を試し、美顔器・ドライヤーも含め20製品以上を実際に購入・使用。「本当に使えるものだけを紹介したい」という想いでこのサイトを運営しています。
        </p>
      </div>

      {/* Intro */}
      <p className="text-gray-700 leading-8 text-sm mb-10">{article.intro}</p>

      {/* Table of contents */}
      {article.sections.length > 0 && (
        <nav className="bg-rose-50 rounded-2xl p-5 border border-rose-100 mb-10">
          <p className="font-bold text-gray-700 mb-3 text-sm">目次</p>
          <ol className="space-y-2">
            {article.sections.map((s, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <span className="text-rose-400 font-bold shrink-0">{i + 1}.</span>
                <a href={`#section-${i}`} className="text-gray-600 hover:text-rose-400 leading-snug">
                  {s.h2}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      )}

      {/* Sections */}
      <div className="space-y-12 mb-12">
        {article.sections.map((section, i) => (
          <section key={i} id={`section-${i}`}>
            <h2 className="text-xl font-bold text-gray-800 mb-5 pb-2 border-b-2 border-rose-100">
              {section.h2}
            </h2>
            <div className="space-y-4">
              {section.paragraphs.map((p, pi) => (
                <p key={pi} className="text-gray-700 leading-8 text-sm">
                  {p}
                </p>
              ))}
            </div>
            {section.tip && (
              <div className="mt-5 bg-amber-50 border-l-4 border-amber-400 rounded-r-xl px-5 py-4">
                <p className="text-sm font-bold text-amber-700 mb-1">💡 ポイント</p>
                <p className="text-sm text-amber-800 leading-relaxed">{section.tip}</p>
              </div>
            )}
            {section.warning && (
              <div className="mt-5 bg-red-50 border-l-4 border-red-400 rounded-r-xl px-5 py-4">
                <p className="text-sm font-bold text-red-600 mb-1">⚠️ 注意事項</p>
                <p className="text-sm text-red-700 leading-relaxed">{section.warning}</p>
              </div>
            )}
            {/* Mid-article CTA after second section */}
            {i === 1 && article.ctaHref && (
              <div className="mt-6 bg-rose-50 rounded-2xl p-5 border border-rose-100">
                <p className="text-center text-sm font-bold text-gray-700 mb-3">
                  気になった方はこちらからチェック
                </p>
                <CTAButton href={article.ctaHref} variant="amazon">
                  {article.ctaLabel ?? 'Amazonで価格を確認する'}
                </CTAButton>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section className="mb-12">
          <h2 className="text-xl font-bold text-gray-800 mb-6">関連商品レビュー</h2>
          <div className="grid grid-cols-1 gap-4">
            {relatedProducts.map((product) => {
              if (!product) return null;
              return (
                <Link
                  key={product.slug}
                  href={`/reviews/${product.slug}`}
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-rose-400 font-medium mb-0.5">{product.brand}</p>
                    <p className="font-bold text-gray-800 text-sm leading-snug truncate">
                      {product.name}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">口コミ・レビューを見る →</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-300 shrink-0" />
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* Final CTA */}
      {article.ctaHref && (
        <section className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 border border-rose-100">
          <h2 className="text-xl font-bold text-gray-800 text-center mb-6">
            まずは最安値をチェック
          </h2>
          <div className="max-w-sm mx-auto">
            <CTAButton href={article.ctaHref} variant="amazon" size="lg">
              {article.ctaLabel ?? 'Amazonで価格を確認する'}
            </CTAButton>
          </div>
          <p className="text-xs text-gray-400 text-center mt-4">
            ※価格は記事執筆時点のものです。最新価格は各リンクからご確認ください。
          </p>
        </section>
      )}
    </article>
  );
}
