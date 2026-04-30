'use client';
import { useLanguage } from '@/context/LanguageContext';
import PageHeader from '@/components/page-header';

export default function AboutUs() {
  const { lang } = useLanguage();
  return (
    <div className="min-h-screen bg-slate-50">
      <PageHeader titleBn="আমাদের সম্পর্কে" titleEn="About Us" />
      <div className="max-w-4xl mx-auto p-8 bg-white my-8 rounded-xl shadow-sm border border-slate-100">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">{lang === 'bn' ? 'স্বপ্ননীড় রিয়েল এস্টেট অ্যান্ড কনস্ট্রাকশন' : 'SwapnoNeer Real Estate & Construction'}</h2>
        <p className="text-slate-600 mb-4">
          {lang === 'bn' ? 'স্বপ্ননীড় রিয়েল এস্টেট অ্যান্ড কনস্ট্রাকশন বাংলাদেশে একটি বিশ্বস্ত এবং নির্ভরযোগ্য প্রতিষ্ঠান। আমাদের লক্ষ্য হলো মানুষের স্বপ্নের বাড়ি নির্মাণের স্বপ্ন পূরণ করা এবং সঠিক জমি ও বাড়ি খুঁজে পাওয়ার প্রক্রিয়াকে সহজ করা।' : 'SwapnoNeer Real Estate & Construction is a trusted and reliable organization in Bangladesh. Our goal is to fulfill people\'s dreams of building their dream homes and to simplify the process of finding the right land and home.'}
        </p>
        <p className="text-slate-600 mb-4">
          {lang === 'bn' ? 'আমরা দীর্ঘদিন ধরে রিয়েল এস্টেট এবং নির্মাণ খাতে কাজ করছি। আমাদের দক্ষ প্রকৌশলী এবং অভিজ্ঞ কর্মীরা আধুনিক এবং নিরাপদ বাড়ি নিশ্চিত করতে বদ্ধপরিকর।' : 'We have been working in the real estate and construction sectors for a long time. Our skilled engineers and experienced staff are committed to ensuring modern and safe homes.'}
        </p>
      </div>
    </div>
  );
}
