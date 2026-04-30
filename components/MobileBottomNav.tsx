'use client';
import { useLanguage } from '@/context/LanguageContext';
import { Home, ShoppingBag, PlusCircle, Hammer, Calculator, UserPlus } from 'lucide-react';
import Link from 'next/link';

export default function MobileBottomNav() {
  const { lang } = useLanguage();
  const items = [
    { href: '/', icon: Home, label: lang === 'bn' ? 'হোম' : 'Home' },
    { href: '/listings', icon: ShoppingBag, label: lang === 'bn' ? 'কেনা' : 'Buy' },
    { href: '/sell', icon: PlusCircle, label: lang === 'bn' ? 'বিক্রয়' : 'Sell' },
    { href: '/construction', icon: Hammer, label: lang === 'bn' ? 'নির্মাণ' : 'Const' },
    { href: '/calculator', icon: Calculator, label: lang === 'bn' ? 'ক্যালক' : 'Calc' },
    { href: '/register', icon: UserPlus, label: lang === 'bn' ? 'রেজি' : 'Reg' },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 z-50 p-2 flex justify-around shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      {items.map((item) => (
        <Link key={item.href} href={item.href} className="flex flex-col items-center p-1 text-slate-500 hover:text-emerald-700 transition-colors duration-200">
          <item.icon className="w-6 h-6" strokeWidth={2} />
          <span className="text-[11px] font-medium mt-1">{item.label}</span>
        </Link>
      ))}
    </div>
  );
}
