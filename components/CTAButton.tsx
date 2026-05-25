import { ExternalLink } from 'lucide-react';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'amazon' | 'rakuten' | 'official';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const variants = {
  primary: 'bg-rose-400 hover:bg-rose-500 text-white shadow-md',
  amazon: 'bg-amber-400 hover:bg-amber-500 text-gray-900',
  rakuten: 'bg-red-500 hover:bg-red-600 text-white',
  official: 'bg-gray-800 hover:bg-gray-900 text-white',
};

const sizes = {
  sm: 'py-2 px-3 text-xs',
  md: 'py-3 px-6 text-sm',
  lg: 'py-4 px-8 text-base',
};

export default function CTAButton({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
}: CTAButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={`flex items-center justify-center gap-2 rounded-lg font-bold w-full transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
      <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
    </a>
  );
}
