'use client';
import { useLanguage } from '@/context/LanguageContext';
import PageHeader from '@/components/page-header';

export default function ContactUs() {
  const { lang } = useLanguage();
  return (
    <div className="min-h-screen bg-slate-50">
      <PageHeader titleBn="যোগাযোগ করুন" titleEn="Contact Us" />
      <div className="max-w-4xl mx-auto p-8 bg-white my-8 rounded-xl shadow-sm border border-slate-100">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">{lang === 'bn' ? 'আমাদের সাথে যোগাযোগ' : 'Contact With Us'}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                <p className="text-slate-600 mb-2"><strong>{lang === 'bn' ? 'ঠিকানা:' : 'Address:'}</strong> {lang === 'bn' ? 'ধানমন্ডি, ঢাকা, বাংলাদেশ' : 'Dhanmondi, Dhaka, Bangladesh'}</p>
                <p className="text-slate-600 mb-2"><strong>{lang === 'bn' ? 'ফোন:' : 'Phone:'}</strong> ০১৯০০-০০০০০০</p>
                <p className="text-slate-600 mb-2"><strong>Email:</strong> info@swapnoneer.com</p>
            </div>
            <form className="space-y-4">
                <input type="text" placeholder={lang === 'bn' ? 'আপনার নাম' : 'Your Name'} className="w-full border border-slate-300 rounded p-2" />
                <input type="email" placeholder="Email" className="w-full border border-slate-300 rounded p-2" />
                <textarea placeholder={lang === 'bn' ? 'আপনার বার্তা' : 'Your Message'} rows={4} className="w-full border border-slate-300 rounded p-2"></textarea>
                <button className="bg-blue-800 text-white px-6 py-2 rounded">{lang === 'bn' ? 'বার্তা পাঠান' : 'Send Message'}</button>
            </form>
        </div>
      </div>
    </div>
  );
}
