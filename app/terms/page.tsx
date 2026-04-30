'use client';
import { useLanguage } from '@/context/LanguageContext';
import PageHeader from '@/components/page-header';

export default function TermsAndConditions() {
  const { lang } = useLanguage();
  return (
    <div className="min-h-screen bg-slate-50">
      <PageHeader titleBn="শর্তাবলী (Terms & Conditions)" titleEn="Terms & Conditions" />
      <div className="max-w-4xl mx-auto p-8 bg-white my-8 rounded-xl shadow-sm border border-slate-100">
        <h2 className="text-xl font-bold text-slate-800 mb-4">{lang === 'bn' ? 'আমাদের শর্তাবলী' : 'Our Terms & Conditions'}</h2>
        <p className="text-slate-600 mb-4">
          {lang === 'bn' ? 'আমাদের ওয়েবসাইট ব্যবহার করার মাধ্যমে আপনি আমাদের নিয়ম ও শর্তাবলি মেনে নিতে সম্মত হচ্ছেন।' : 'By using our website, you agree to accept our rules and terms.'}
        </p>
        <p className="text-slate-600 mb-4">
          {lang === 'bn' ? '১. ওয়েবসাইটের তথ্যাবলি পরিবর্তন করার পূর্ণ ক্ষমতা আমাদের আছে।' : '1. We have full authority to change the website\'s information.'}
        </p>
        <p className="text-slate-600 mb-4">
          {lang === 'bn' ? '২. যেকোনো ধরনের প্রতারণামূলক কার্যক্রম ওয়েবসাইট থেকে নিষিদ্ধ।' : '2. Any kind of fraudulent activity is prohibited on the website.'}
        </p>
      </div>
    </div>
  );
}
