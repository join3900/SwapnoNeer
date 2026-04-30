'use client';
import MobileDrawer from './MobileDrawer';
import { useLanguage } from '@/context/LanguageContext';
import { Home as HomeIcon, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <nav className="bg-white border-b border-slate-200 px-8 py-4 hidden md:flex items-center justify-between shadow-sm sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white">
            <HomeIcon className="w-6 h-6" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-blue-900">
            {lang === 'bn' ? 'স্বপ্ননীড়' : 'SwapnoNeer'} <span className="text-emerald-600 font-medium text-lg">{lang === 'bn' ? 'রিয়েল এস্টেট' : 'Real Estate'}</span>
          </span>
        </div>
        <div className="flex gap-8 font-medium text-slate-600">
          <Link href="/" className="hover:text-blue-700">{lang === 'bn' ? 'হোম' : 'Home'}</Link>
          <Link href="/listings" className="hover:text-blue-700">{lang === 'bn' ? 'জমি/বাড়ি কিনুন' : 'Buy Land/House'}</Link>
          <Link href="/sell" className="hover:text-blue-700">{lang === 'bn' ? 'জমি বিক্রয়' : 'Sell Land'}</Link>
          <Link href="/construction" className="hover:text-blue-700">{lang === 'bn' ? 'নির্মাণ সেবা' : 'Construction'}</Link>
          <Link href="/calculator" className="hover:text-blue-700">{lang === 'bn' ? 'ক্যালকুলেটর' : 'Calculator'}</Link>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setLang(lang === 'bn' ? 'en' : 'bn')} 
            className="text-lg font-bold text-blue-800 bg-blue-50 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors border border-blue-200 shadow-sm"
          >
            {lang === 'bn' ? 'বাংলা / EN' : 'EN / বাংলা'}
          </button>
          <Link href="/login" className="text-slate-800 font-semibold hover:text-blue-900">{lang === 'bn' ? 'লগইন' : 'Login'}</Link>
          <Link href="/register" className="bg-emerald-700 text-white px-6 py-2 rounded-md font-semibold hover:bg-emerald-800">{lang === 'bn' ? 'রেজিস্ট্রেশন' : 'Register'}</Link>
        </div>
      </nav>
      
      <nav className="bg-white border-b border-slate-100 p-3 flex items-center justify-between md:hidden sticky top-0 z-50">
         <div className="flex items-center gap-2">
            {pathname !== '/' ? (
              <button onClick={() => router.back()} className="p-2 text-slate-700">
                <ChevronLeft className="w-6 h-6" />
              </button>
            ) : (
                <MobileDrawer />
            )}
            <div className="w-8 h-8 bg-emerald-600 rounded flex items-center justify-center text-white">
              <HomeIcon className="w-4 h-4" />
            </div>
            <span className="text-lg font-bold text-blue-900">{lang === 'bn' ? 'স্বপ্ননীড়' : 'SwapnoNeer'}</span>
         </div>
         <button 
            onClick={() => setLang(lang === 'bn' ? 'en' : 'bn')} 
            className="text-xs font-bold text-blue-800 bg-blue-50 px-3 py-1.5 rounded-full hover:bg-blue-100 transition-colors border border-blue-200"
          >
            {lang === 'bn' ? 'EN' : 'বাং'}
          </button>
      </nav>
    </>
  );
}
