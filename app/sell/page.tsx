'use client';
import PageHeader from '@/components/page-header';
import { useLanguage } from '@/context/LanguageContext';
import { useState } from 'react';

export default function SellLand() {
  const { lang } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [images, setImages] = useState<(File | null)[]>(Array(4).fill(null));

  const handleImageChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const newImages = [...images];
    if (e.target.files && e.target.files[0]) {
      newImages[index] = e.target.files[0];
    } else {
      newImages[index] = null;
    }
    setImages(newImages);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <PageHeader titleBn="জমি ও বাড়ি বিক্রয় পোস্ট" titleEn="Sell Property Post" />
      <div className="max-w-2xl mx-auto p-4 md:p-8 bg-white my-8 rounded-xl shadow-sm border border-slate-100">
        {submitted ? (
            <div className="p-8 text-center text-emerald-700 font-bold">
                {lang === 'bn' ? 'আপনার পোস্ট সফলভাবে জমা হয়েছে। এডমিন যাচাই করে প্রকাশ করবেন।' : 'Your post has been submitted successfully. Admin will review and publish it.'}
            </div>
        ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">{lang === 'bn' ? 'শিরোনাম' : 'Title'}</label>
                    <input type="text" required className="w-full border border-slate-300 rounded-lg p-2" />
                </div>
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">{lang === 'bn' ? 'সম্পত্তির ধরন' : 'Property Type'}</label>
                    <select required className="w-full border border-slate-300 rounded-lg p-2">
                        <option value="land">{lang === 'bn' ? 'জমি' : 'Land'}</option>
                        <option value="house">{lang === 'bn' ? 'বাড়ি' : 'House'}</option>
                        <option value="flat">{lang === 'bn' ? 'ফ্ল্যাট' : 'Flat'}</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">{lang === 'bn' ? 'বর্ণনা' : 'Description'}</label>
                    <textarea required className="w-full border border-slate-300 rounded-lg p-2" rows={4}></textarea>
                </div>
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">{lang === 'bn' ? 'দাম' : 'Price'}</label>
                    <input type="number" required className="w-full border border-slate-300 rounded-lg p-2" />
                </div>
                <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      {lang === 'bn' ? 'ছবি আপলোড করুন (সর্বোচ্চ ৪টি)' : 'Upload Images (Max 4)'}
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      {images.map((_, index) => (
                        <div key={index} className="border border-slate-300 rounded-lg p-2">
                          <span className="text-xs text-slate-500 block mb-1">
                            {lang === 'bn' ? `ছবি ${index + 1}` : `Image ${index + 1}`}
                          </span>
                          <input
                            type="file"
                            accept="image/*"
                            className="w-full text-sm"
                            onChange={(e) => handleImageChange(index, e)}
                          />
                        </div>
                      ))}
                    </div>
                </div>
                <button type="submit" className="w-full bg-emerald-700 text-white rounded-lg py-3 font-bold hover:bg-emerald-800">
                    {lang === 'bn' ? 'পোস্ট জমা দিন' : 'Submit Post'}
                </button>
            </form>
        )}
      </div>
    </div>
  );
}
