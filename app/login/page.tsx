'use client';
import { useState } from 'react';
import { Eye, EyeOff, User, Heart, Filter } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-xl p-8 w-full max-w-md border border-white">
        <h1 className="text-3xl font-bold text-center mb-2">{lang === 'bn' ? 'লগইন করুন' : 'Login'}</h1>
        <p className="text-center text-slate-600 mb-6">{lang === 'bn' ? 'আপনার অ্যাকাউন্ট অ্যাক্সেস করতে আপনার ইমেইল এবং পাসওয়ার্ড লিখুন।' : 'Enter your email and password to access your account.'}</p>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">{lang === 'bn' ? 'ইমেইল' : 'Email'}</label>
            <input type="email" placeholder={lang === 'bn' ? 'উদাহরণ: email@domain.com' : 'e.g: email@domain.com'} className="w-full p-3 rounded-lg border border-slate-300 bg-white/50" />
          </div>
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-sm font-medium">{lang === 'bn' ? 'পাসওয়ার্ড' : 'Password'}</label>
              <Link href="#" className="text-xs text-blue-600">{lang === 'bn' ? 'ভুলে গেছেন?' : 'Forgot?'}</Link>
            </div>
            <div className="relative">
              <input type={showPassword ? 'text' : 'password'} placeholder="password" className="w-full p-3 rounded-lg border border-slate-300 bg-white/50" />
              <button onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3.5 text-slate-400">
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          <button className="w-full bg-emerald-700 text-white p-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-emerald-800">
            {lang === 'bn' ? 'লগইন করুন' : 'Login'} <span className="text-lg">↗</span>
          </button>
        </div>
        
        <div className="flex gap-2 mt-4">
          <button className="flex-1 bg-white border border-slate-300 p-2 rounded-lg text-sm text-center flex items-center justify-center gap-1">Google</button>
          <button className="flex-1 bg-blue-900 text-white p-2 rounded-lg text-sm text-center flex items-center justify-center gap-1">Facebook</button>
        </div>
        
        <p className="text-center text-sm mt-6">{lang === 'bn' ? 'নতুন সদস্য?' : 'New Member?'} <Link href="/register" className="text-blue-700 font-bold">{lang === 'bn' ? 'নিবন্ধন করুন' : 'Register'}</Link></p>
      </div>

      <div className="hidden lg:block ml-8 bg-white/60 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white w-80">
        <div className="flex justify-around mb-4 text-slate-500">
          <User size={24} /> <Heart size={24} /> <Filter size={24} />
        </div>
        <p className="text-sm text-center">{lang === 'bn' ? 'অ্যাক্সেস পান: পছন্দের তালিকা, অনুসন্ধান ফিল্টার এবং আরও অনেক কিছু।' : 'Get Access: Favorites list, search filters, and much more.'}</p>
      </div>
      </div>
    </div>
  );
}