'use client';
import PageHeader from '@/components/page-header';
import { useLanguage } from '@/context/LanguageContext';

export default function ReturnPolicy() {
  const { lang } = useLanguage();
  return (
    <div className="min-h-screen bg-slate-50">
        <PageHeader titleBn="ফেরত নীতিমালা" titleEn="Return & Refund Policy" />
        <div className="max-w-4xl mx-auto p-8 bg-white my-8 rounded-xl shadow-sm border border-slate-100">
            <h2 className="text-xl font-bold text-slate-800">{lang === 'bn' ? 'ফেরত নীতিমালা শীঘ্রই যুক্ত করা হবে।' : 'Return & Refund policy will be added soon.'}</h2>
        </div>
    </div>
  );
}
