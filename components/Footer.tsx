'use client';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="bg-white border-t border-slate-200 py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* Company Info */}
        <div>
          <h3 className="font-bold text-slate-800 mb-4">SWAPNONEER</h3>
          <p className="text-slate-600 mb-2">
            {lang === 'bn' ? 'ধানমন্ডি, ঢাকা, বাংলাদেশ' : 'Dhanmondi, Dhaka, Bangladesh'}
          </p>
          <p className="font-bold text-slate-800">+৮৮০১৯০০-০০০০০০</p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-bold text-slate-800 mb-4 uppercase tracking-wider text-emerald-700">
            {lang === 'bn' ? 'দরকারী লিঙ্ক' : 'USEFUL LINK'}
          </h3>
          <ul className="space-y-2 text-slate-600">
            <li><Link href="/contact" className="hover:text-emerald-700">{lang === 'bn' ? 'যোগাযোগ' : 'Contact Us'}</Link></li>
            <li><Link href="/order-procedure" className="hover:text-emerald-700">{lang === 'bn' ? 'অর্ডার প্রক্রিয়া' : 'Order procedure'}</Link></li>
            <li><Link href="/delivery-rules" className="hover:text-emerald-700">{lang === 'bn' ? 'ডেলিভারি নীতিমালা' : 'Delivery Rules'}</Link></li>
            <li><Link href="/return-policy" className="hover:text-emerald-700">{lang === 'bn' ? 'ফেরত নীতিমালা' : 'Return & Refund Policy'}</Link></li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-bold text-slate-800 mb-4 uppercase tracking-wider text-emerald-700">
            {lang === 'bn' ? 'লিঙ্ক' : 'LINK'}
          </h3>
          <ul className="space-y-2 text-slate-600">
            <li><Link href="/terms" className="hover:text-emerald-700">{lang === 'bn' ? 'শর্তাবলি' : 'Terms & Conditions'}</Link></li>
            <li><Link href="/privacy" className="hover:text-emerald-700">{lang === 'bn' ? 'গোপনীয়তা' : 'Privacy Policy'}</Link></li>
            <li><Link href="/about" className="hover:text-emerald-700">{lang === 'bn' ? 'আমাদের সম্পর্কে' : 'About Us'}</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-slate-100 text-center text-slate-500 text-xs">
        <p>© ২০২৪ {lang === 'bn' ? 'স্বপ্ননীড় রিয়েল এস্টেট অ্যান্ড কনস্ট্রাকশন। সর্বস্বত্ব সংরক্ষিত।' : 'SwapnoNeer Real Estate & Construction. All rights reserved.'}</p>
      </div>
    </footer>
  );
}
