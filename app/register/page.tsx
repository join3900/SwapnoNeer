'use client';
import { useState } from 'react';
import { User, Eye, EyeOff, Camera, Upload } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Register() {
  const { lang } = useLanguage();
  const [userType, setUserType] = useState<'buyer' | 'seller'>('buyer');

  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-8 w-full max-w-2xl border border-white">
        <div className="flex justify-center gap-4 mb-6">
            <button 
                onClick={() => setUserType('buyer')}
                className={`px-6 py-2 rounded-full font-bold flex items-center gap-2 ${userType === 'buyer' ? 'bg-white shadow border' : 'text-slate-500'}`}
            >
                <User size={20}/>{lang === 'bn' ? 'আমি ক্রেতা' : 'I am Buyer'}
            </button>
            <button 
                onClick={() => setUserType('seller')}
                className={`px-6 py-2 rounded-full font-bold flex items-center gap-2 ${userType === 'seller' ? 'bg-white shadow border' : 'text-slate-500'}`}
            >
                <User size={20}/>{lang === 'bn' ? 'আমি বিক্রেতা' : 'I am Seller'}
            </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
               <div>
                  <label className="block text-sm font-medium mb-1">{lang === 'bn' ? 'পূর্ণ নাম' : 'Full Name'}</label>
                  <input type="text" placeholder={lang === 'bn' ? 'যেমন: জনাব এক্স' : 'e.g: Mr.X'} className="w-full p-2 rounded-lg border border-slate-300 bg-white/50" />
               </div>
               <div>
                  <label className="block text-sm font-medium mb-1">{lang === 'bn' ? 'ইমেইল' : 'Email'}</label>
                  <input type="email" placeholder={lang === 'bn' ? 'যেমন: email@domain.com' : 'e.g: email@domain.com'} className="w-full p-2 rounded-lg border border-slate-300 bg-white/50" />
               </div>
               <div>
                  <label className="block text-sm font-medium mb-1">{lang === 'bn' ? 'ফোন নম্বর' : 'Phone Number'}</label>
                  <input type="text" placeholder={lang === 'bn' ? 'যেমন: +৮৮০' : 'e.g: +880'} className="w-full p-2 rounded-lg border border-slate-300 bg-white/50" />
               </div>
               <div className="grid grid-cols-2 gap-4">
                   <div>
                      <label className="block text-sm font-medium mb-1">{lang === 'bn' ? 'পাসওয়ার্ড' : 'Password'}</label>
                      <input type="password" placeholder="password" className="w-full p-2 rounded-lg border border-slate-300 bg-white/50" />
                   </div>
                   <div>
                      <label className="block text-sm font-medium mb-1">{lang === 'bn' ? 'নিশ্চিত পাসওয়ার্ড' : 'Confirm Password'}</label>
                      <input type="password" placeholder="password" className="w-full p-2 rounded-lg border border-slate-300 bg-white/50" />
                   </div>
               </div>
               <div className="h-2 bg-slate-200 rounded-full w-full overflow-hidden">
                   <div className="h-2 bg-emerald-600 w-1/2"></div>
               </div>
               <p className="text-xs text-slate-500">{lang === 'bn' ? 'পাসওয়ার্ড শক্তিশালীকরণ' : 'Password Strength'}</p>
          </div>

          <div className="bg-slate-100 rounded-2xl p-4 border border-slate-200">
              <p className="text-sm font-bold text-center mb-2">{lang === 'bn' ? 'ফটো আপলোড' : 'Photo Upload'}</p>
              <p className="text-xs mb-4 text-center">{lang === 'bn' ? 'পরিচয় ভেরিফিকেশনের জন্য ছবি/ডকুমেন্ট আপলোড করুন' : 'Upload photo/document for verification'}</p>
              <div className="flex flex-col items-center mb-4">
                  <div className="w-20 h-20 bg-slate-300 rounded-full flex items-center justify-center mb-2"><User size={40} className="text-slate-500"/></div>
                  <p className="text-xs">{lang === 'bn' ? 'এখানে ছবি আপলোড করুন' : 'Upload photo here'}</p>
              </div>
              <div className="border border-dashed border-slate-400 p-4 rounded-lg text-center">
                  <Upload className="mx-auto mb-2 text-slate-400" />
                  <input type="file" id="photo-upload" className="hidden" accept="image/*" />
                  <label htmlFor="photo-upload" className="cursor-pointer bg-white border text-sm px-4 py-1 rounded hover:bg-slate-50">
                    {lang === 'bn' ? 'ফাইল নির্বাচন করুন' : 'Choose File'}
                  </label>
                  <p className="text-[10px] mt-2">{lang === 'bn' ? 'বা ড্র্যাগ-আ্যান্ড-ড্রপ করুন' : 'or drag-and-drop'}<br/>{lang === 'bn' ? 'সর্বোচ্চ ৫ মেগাবাইট' : 'Max 5MB'}</p>
              </div>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
          <input type="checkbox" id="terms" className="rounded" />
          <label htmlFor="terms">
            {lang === 'bn' ? 'আমি যা তথ্য দিয়েছি তা সত্য' : 'The information I have provided is true'}
          </label>
        </div>

        <button className="w-full mt-6 bg-emerald-700 text-white p-3 rounded-lg font-bold">{lang === 'bn' ? 'প্রবেশ করুন এবং সুযোগগুলি লুফে নিন' : 'Enter & Grab Opportunities'}</button>
        <p className="text-center text-sm mt-4">{lang === 'bn' ? 'ইতিমধ্যে সদস্য?' : 'Already a member?'} <Link href="/login" className="text-blue-700 font-bold">{lang === 'bn' ? 'লগইন করুন' : 'Login'}</Link></p>
      </div>
    </div>
    </div>
  );
}