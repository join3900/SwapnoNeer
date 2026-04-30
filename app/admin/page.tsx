'use client';
import { useLanguage } from '@/context/LanguageContext';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const { lang } = useLanguage();
  // Simplified auth check - in production use secure sessions/JWT
  // const { user } = useAuth(); 
  
  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4">Manage Pages</h2>
          <p className="text-slate-600 mb-4">Edit existing pages or create new ones.</p>
          <a href="/admin/pages" className="text-blue-700 font-bold">Go to Pages →</a>
        </div>
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold mb-4">Manage Posts</h2>
          <p className="text-slate-600 mb-4">Approve or reject property listings.</p>
          <a href="/admin/listings" className="text-blue-700 font-bold">Go to Listings →</a>
        </div>
      </div>
    </div>
  );
}
