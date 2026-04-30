'use client';
import PageHeader from '@/components/page-header';
import { useLanguage } from '@/context/LanguageContext';

export default function OrderProcedure() {
  const { lang } = useLanguage();
  return (
    <div className="min-h-screen bg-slate-50">
        <PageHeader titleBn="অর্ডার প্রক্রিয়া" titleEn="Order Procedure" />
        <div className="max-w-4xl mx-auto p-8 bg-white my-8 rounded-xl shadow-sm border border-slate-100">
            <h2 className="text-xl font-bold text-slate-800">{lang === 'bn' ? 'অর্ডার প্রক্রিয়া শীঘ্রই যুক্ত করা হবে।' : 'Order procedure will be added soon.'}</h2>
        </div>
    </div>
  );
}
