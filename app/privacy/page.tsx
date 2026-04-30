'use client';
import { useLanguage } from '@/context/LanguageContext';
import PageHeader from '@/components/page-header';

export default function PrivacyPolicy() {
  const { lang } = useLanguage();
  return (
    <div className="min-h-screen bg-slate-50">
      <PageHeader titleBn="গোপনীয়তা নীতিমালা (Privacy Policy)" titleEn="Privacy Policy" />
      <div className="max-w-4xl mx-auto p-8 bg-white my-8 rounded-xl shadow-sm border border-slate-100">
        <h2 className="text-xl font-bold text-slate-800 mb-4">{lang === 'bn' ? 'আপনার তথ্যের নিরাপত্তা' : 'Your Data Security'}</h2>
        <p className="text-slate-600 mb-4">
          {lang === 'bn' ? 'স্বপ্ননীড় রিয়েল এস্টেট অ্যান্ড কনস্ট্রাকশন আপনার গোপনীয়তাকে গুরুত্ব দেয়। আমরা আপনার ব্যক্তিগত তথ্যের নিরাপত্তা নিশ্চিত করতে প্রতিশ্রুতিবদ্ধ।' : 'SwapnoNeer Real Estate & Construction values your privacy. We are committed to ensuring the security of your personal information.'}
        </p>
        <p className="text-slate-600 mb-4">
          {lang === 'bn' ? 'আমাদের ওয়েবসাইট ব্যবহারের সময় আপনি যেসব তথ্য শেয়ার করেন, তা কেবল আমাদের সেবা প্রদানের কাজেই ব্যবহৃত হয়। আমরা কোনো তৃতীয় পক্ষের কাছে আপনার তথ্য বিক্রি করি না।' : 'The information you share while using our website is used only for providing our services. We do not sell your information to any third party.'}
        </p>
      </div>
    </div>
  );
}
