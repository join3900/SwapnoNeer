'use client';
import { useState } from 'react';
import { Menu, X, Info, Settings, User, Home, ShoppingBag, PlusCircle, Hammer, Calculator, LogIn, UserPlus } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function MobileDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang } = useLanguage();

  const toggleDrawer = () => setIsOpen(!isOpen);

  const menuItems = [
    { href: '/', icon: Home, label: lang === 'bn' ? 'হোম' : 'Home' },
    { href: '/listings', icon: ShoppingBag, label: lang === 'bn' ? 'জমি/বাড়ি কেনা' : 'Buy Land/House' },
    { href: '/sell', icon: PlusCircle, label: lang === 'bn' ? 'জমি বিক্রয়' : 'Sell Land' },
    { href: '/construction', icon: Hammer, label: lang === 'bn' ? 'নির্মাণ সেবা' : 'Construction' },
    { href: '/calculator', icon: Calculator, label: lang === 'bn' ? 'ক্যালকুলেটর' : 'Calculator' },
    { href: '/login', icon: LogIn, label: lang === 'bn' ? 'লগইন' : 'Login' },
    { href: '/register', icon: UserPlus, label: lang === 'bn' ? 'রেজিস্ট্রেশন' : 'Register' },
    { href: '/about', icon: Info, label: lang === 'bn' ? 'আমাদের সম্পর্কে' : 'About Us' },
    { href: '/terms', icon: Settings, label: lang === 'bn' ? 'শর্তাবলি' : 'Terms' },
    { href: '/privacy', icon: Settings, label: lang === 'bn' ? 'গোপনীয়তা নীতিমালা' : 'Privacy Policy' },
    { href: '/contact', icon: User, label: lang === 'bn' ? 'যোগাযোগ' : 'Contact Us' },
  ];

  return (
    <>
      <button onClick={toggleDrawer} className="p-2 text-slate-700">
        <Menu className="w-6 h-6" />
      </button>

      {/* Slide-out Drawer */}
      <div className={`fixed top-0 left-0 w-64 h-full bg-white z-[60] transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 shadow-2xl overflow-y-auto`}>
        <div className="p-5 flex justify-between items-center border-b">
          <span className="font-bold text-lg text-emerald-700">{lang === 'bn' ? 'মেনু' : 'Menu'}</span>
          <button onClick={toggleDrawer} className="text-slate-500">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-4 flex flex-col gap-4 font-medium text-slate-700">
          {menuItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              className="flex items-center gap-3 p-2 hover:bg-emerald-50 rounded-lg transition-colors" 
              onClick={toggleDrawer}
            >
              <item.icon className="w-5 h-5 text-emerald-600"/> 
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-[55]" onClick={toggleDrawer}></div>}
    </>
  );
}
