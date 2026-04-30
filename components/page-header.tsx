'use client';
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function PageHeader({ titleBn, titleEn }: { titleBn: string, titleEn: string }) {
  const { lang } = useLanguage();
  return (
    <div className="bg-slate-100 border-b border-slate-200 p-8">
      <div className="max-w-4xl mx-auto">
        <p className="text-slate-500 font-medium text-sm mb-2">{lang === 'bn' ? 'ঠিকানা: ধানমন্ডি, ঢাকা, বাংলাদেশ' : 'Address: Dhanmondi, Dhaka, Bangladesh'}</p>
        <h1 className="text-4xl font-bold text-slate-800">{lang === 'bn' ? titleBn : titleEn}</h1>
      </div>
    </div>
  );
}
