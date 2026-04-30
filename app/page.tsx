'use client';

import { Home as HomeIcon, Eye, Calculator, ChevronRight, MessageCircle, ArrowLeft, Search, UserPlus } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col pb-16 md:pb-0">

      <main className="flex-1 p-2 md:p-8 flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-8">
        {/* Left Content: Featured Listings */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="flex items-center justify-between p-2">
            <h2 className="text-xl md:text-2xl font-bold text-slate-800">{lang === 'bn' ? 'সাম্প্রতিক জমি ও বাড়ি বিক্রয়' : 'Recent Sales'}</h2>
            <Link href="/listings" className="text-emerald-700 font-semibold flex items-center gap-1 text-sm">
              {lang === 'bn' ? 'সবগুলো দেখুন' : 'View All'} <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[...Array(10)].map((_, i) => (
              <Link key={i} href={`/listings/${i + 1}`} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 block hover:shadow-lg transition-shadow">
                <div className="h-40 bg-slate-200 relative">
                  <Image
                    src={`https://picsum.photos/seed/${i + 1}/400/300`}
                    alt="Property"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={i < 4}
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-emerald-600 text-white text-xs px-2 py-1 rounded font-bold">{lang === 'bn' ? 'জমি বিক্রয়' : 'Land Sale'}</div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-base text-slate-800 mb-1">{lang === 'bn' ? `৫ কাঠা নিষ্কন্টক জমি - ${i + 1}` : `5 Katha Land - ${i + 1}`}</h3>
                  <p className="text-slate-500 text-xs mb-3">{lang === 'bn' ? '৩০০ ফিট রাস্তার নিকটস্থ আবাসিক প্লট' : 'Plot near 300ft road'}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-emerald-700 font-bold text-lg">{lang === 'bn' ? '৳ ৩৫,০০,০০০' : '৳ 3,500,000'}</span>
                    <div className="bg-slate-100 p-2 rounded text-blue-900"><Eye className="w-5 h-5" /></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="bg-blue-900 rounded-xl p-4 md:p-6 text-white flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-lg md:text-xl font-bold mb-1">{lang === 'bn' ? 'নিজে জমি বা বাড়ি বিক্রি করতে চান?' : 'Want to Sell Land?'}</h2>
              <p className="text-blue-100 text-sm">{lang === 'bn' ? 'সহজে তথ্য আপলোড করুন এবং এডমিনের অনুমোদনের পর পোস্ট করুন।' : 'Upload easily and post after admin approval.'}</p>
            </div>
            <Link href="/sell" className="bg-white text-blue-900 px-4 py-2 rounded-lg font-bold text-sm shadow-lg w-full md:w-auto text-center">{lang === 'bn' ? 'পোস্ট দিন' : 'Post'}</Link>
          </div>
        </div>

        {/* Right Content: Calculator & Service Request */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {/* Calculator Link Widget */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 mb-4">
              <Calculator className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">{lang === 'bn' ? 'নির্মাণ খরচ ক্যালকুলেটর' : 'Construction Cost Calculator'}</h3>
            <p className="text-sm text-slate-500 mb-6">{lang === 'bn' ? 'আপনার নির্মাণ প্রকল্পের খরচ সহজে জানুন।' : 'Estimate your construction project cost easily.'}</p>
            <Link href="/calculator" className="w-full bg-blue-800 text-white py-3 rounded-lg font-bold hover:bg-blue-900 transition-colors">
              {lang === 'bn' ? 'ক্যালকুলেটর ব্যবহার করুন' : 'Use Calculator'}
            </Link>
          </div>

          {/* Service Request Form */}
          <div className="bg-emerald-700 rounded-xl shadow-lg p-4 text-white">
            <h3 className="text-lg font-bold mb-3">{lang === 'bn' ? 'বাড়ি নির্মাণ অর্ডার দিন' : 'Order Construction'}</h3>
            <form className="space-y-2">
              <input type="text" placeholder={lang === 'bn' ? 'আপনার নাম' : 'Name'} className="w-full bg-white/10 border border-white/20 rounded px-3 py-2 text-sm placeholder:text-emerald-200 outline-none" />
              <input type="text" placeholder={lang === 'bn' ? 'মোবাইল' : 'Mobile'} className="w-full bg-white/10 border border-white/20 rounded px-3 py-2 text-sm placeholder:text-emerald-200 outline-none" />
              <button className="w-full bg-white text-emerald-800 py-2 rounded font-bold text-sm hover:bg-emerald-50">{lang === 'bn' ? 'আবেদন করুন' : 'Apply'}</button>
            </form>
          </div>
        </div>
      </main>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-8 right-8 flex items-center gap-3">
        <div className="bg-white px-4 py-2 rounded-full shadow-lg border border-slate-100 text-sm font-bold text-slate-700 animate-pulse">
          {lang === 'bn' ? 'সরাসরি কথা বলুন' : 'Talk Directly'}
        </div>
        <a href="https://wa.me/8801977561499" target="_blank" rel="noopener noreferrer" className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition-transform">
          <MessageCircle className="w-9 h-9" />
        </a>
      </div>

    </div>
  );
}
