'use client';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import PageHeader from '@/components/page-header';
import { useLanguage } from '@/context/LanguageContext';

export default function ListingDetail() {
  const params = useParams();
  const { lang } = useLanguage();
  const id = params.id as string;

  return (
    <div className="min-h-screen bg-slate-50">
      <PageHeader titleBn="পোস্টের বিস্তারিত" titleEn="Post Details" />
      <div className="max-w-4xl mx-auto p-4 md:p-8 bg-white my-8 rounded-xl shadow-sm border border-slate-100">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          {lang === 'bn' ? `৫ কাঠা নিষ্কন্টক জমি - ${id}` : `5 Katha Land - ${id}`}
        </h1>
        <div className="h-96 relative bg-slate-200 rounded-lg mb-6 overflow-hidden">
             <Image
                src={`https://picsum.photos/seed/${id}/800/600`}
                alt="Property"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
        </div>
        <p className="text-slate-700 mb-4">
          {lang === 'bn' ? 'বিস্তারিত বর্ণনা এখানে থাকবে। ৩' : 'Detailed description will be here. This is a property.'}
        </p>
        <div className="text-emerald-700 font-bold text-2xl">
          {lang === 'bn' ? '৳ ৩৫,০০,০০০' : '৳ 3,500,000'}
        </div>
      </div>
    </div>
  );
}
