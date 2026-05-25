'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

const navLinks = [
  { href: '/ranking', label: 'ランキング' },
  { href: '/category/epilator', label: '脱毛器' },
  { href: '/category/face-device', label: '美顔器' },
  { href: '/category/hair-dryer', label: 'ドライヤー' },
  { href: '/compare', label: '比較する' },
  { href: '/column', label: 'コラム' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-rose-100 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Sparkles className="w-6 h-6 text-rose-400 transition-colors group-hover:text-rose-500" />
          <span className="text-xl font-bold text-gray-800">
            美容家電<span className="text-rose-400">NAVI</span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-rose-500 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden p-2 text-gray-600 hover:text-rose-500 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="メニューを開く"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-rose-50">
          <ul className="px-4 py-2">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-gray-50 last:border-0">
                <Link
                  href={link.href}
                  className="block py-3 text-sm font-medium text-gray-700 hover:text-rose-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
