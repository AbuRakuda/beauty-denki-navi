'use client';

import dynamic from 'next/dynamic';
import { Product } from '@/types';

const ComparisonTable = dynamic(() => import('./ComparisonTable'), {
  ssr: false,
  loading: () => <div className="h-64 bg-gray-100 rounded-2xl animate-pulse" />,
});

export default function ClientComparisonTable({ products }: { products: Product[] }) {
  return <ComparisonTable products={products} />;
}
