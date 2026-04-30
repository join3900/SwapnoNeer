'use client';
import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '@/components/page-header';
import { useLanguage } from '@/context/LanguageContext';
import { Eye } from 'lucide-react';

export default function ListingsPage() {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-50">
      <PageHeader titleBn="জমি/বাড়ি কেনা" titleEn="Buy Land/House" />
      <div className="max-w-6xl mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(15)].map((_, i) => (
            <Link key={i} href={`/listings/${i + 1}`} className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 block hover:shadow-lg transition-shadow">
              <div className="h-48 bg-slate-200 relative">
                <Image
                  src={`https://picsum.photos/seed/${i + 1}/400/300`}
                  alt="Property"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-emerald-600 text-white text-xs px-2 py-1 rounded font-bold">
                  {lang === 'bn' ? 'জমি বিক্রয়' : 'Land Sale'}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-base text-slate-800 mb-1">
                  {lang === 'bn' ? `৫ কাঠা নিষ্কন্টক জমি - ${i + 1}` : `5 Katha Land - ${i + 1}`}
                </h3>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-emerald-700 font-bold text-lg">
                    {lang === 'bn' ? '৳ ৩৫,০০,০০০' : '৳ 3,500,000'}
                  </span>
                  <div className="bg-slate-100 p-2 rounded text-blue-900">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
