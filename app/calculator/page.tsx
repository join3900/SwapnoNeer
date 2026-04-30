'use client';

import { useState } from 'react';
import PageHeader from '@/components/page-header';
import { Calculator } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function CalculatorPage() {
  const { lang } = useLanguage();
  const [sqft, setSqft] = useState('1200');
  const [floors, setFloors] = useState('1');
  const [type, setType] = useState('General');
  const [totalCost, setTotalCost] = useState<number | null>(null);

  const calculateCost = () => {
    const sqftNum = parseFloat(sqft) || 0;
    const floorsNum = parseInt(floors) || 1;
    let costPerSqft = 2000;
    if (type === 'Medium') costPerSqft = 2500;
    if (type === 'Advanced') costPerSqft = 3000;
    
    setTotalCost(sqftNum * floorsNum * costPerSqft);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <PageHeader titleBn="ক্যালকুলেটর" titleEn="Calculator" />
      <div className="max-w-2xl mx-auto p-4 md:p-8 bg-white my-8 rounded-xl shadow-sm border border-slate-100">
        {/* Calculator Widget */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center text-blue-700">
            <Calculator className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-800">{lang === 'bn' ? 'নির্মাণ খরচ ক্যালকুলেটর' : 'Construction Cost Calculator'}</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-2">{lang === 'bn' ? 'জমির পরিমাণ (sqft)' : 'Land Amount (sqft)'}</label>
            <input type="text" value={sqft} onChange={(e) => setSqft(e.target.value)} placeholder={lang === 'bn' ? '১২০০' : '1200'} className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-2">{lang === 'bn' ? 'তলা সংখ্যা' : 'Number of Floors'}</label>
            <select value={floors} onChange={(e) => setFloors(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 text-sm">
              <option value="1">{lang === 'bn' ? '১ তলা' : '1 Floor'}</option>
              <option value="2">{lang === 'bn' ? '২ তলা' : '2 Floors'}</option>
              <option value="5">{lang === 'bn' ? '৫ তলা' : '5 Floors'}</option>
            </select>
          </div>
          <div className="col-span-1 md:col-span-2">
            <label className="block text-xs font-bold text-slate-500 uppercase mb-2">{lang === 'bn' ? 'নির্মাণের ধরন' : 'Type of Construction'}</label>
            <div className="flex gap-2">
              <button onClick={() => setType('General')} className={`flex-1 py-3 text-sm rounded font-bold ${type === 'General' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600'}`}>{lang === 'bn' ? 'সাধারণ' : 'General'}</button>
              <button onClick={() => setType('Medium')} className={`flex-1 py-3 text-sm rounded font-bold ${type === 'Medium' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600'}`}>{lang === 'bn' ? 'মাঝারি' : 'Medium'}</button>
              <button onClick={() => setType('Advanced')} className={`flex-1 py-3 text-sm rounded font-bold ${type === 'Advanced' ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-600'}`}>{lang === 'bn' ? 'উন্নত' : 'Advanced'}</button>
            </div>
          </div>
        </div>

        <button onClick={calculateCost} className="w-full bg-blue-800 text-white py-4 rounded-lg font-bold hover:bg-blue-900 transition-colors mb-6">{lang === 'bn' ? 'হিসাব করুন' : 'Calculate'}</button>

        <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-100">
          <div className="flex justify-between items-center">
            <span className="text-slate-600 font-medium">{lang === 'bn' ? 'আনুমানিক মোট খরচ:' : 'Estimated Total Cost:'}</span>
            <span className="font-bold text-emerald-700 text-xl">৳ {totalCost?.toLocaleString() || '--,--,---'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
