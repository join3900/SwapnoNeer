import PageHeader from '@/components/page-header';

export default function BuyLand() {
  return (
    <div className="min-h-screen bg-slate-50">
      <PageHeader titleBn="জমি কিনুন" titleEn="Buy Land" />
      <div className="max-w-4xl mx-auto p-8 bg-white my-8 rounded-xl shadow-sm border border-slate-100">
        <h2 className="text-2xl font-bold text-slate-800">জমি কেনা-বেচার তালিকা শীঘ্রই আসছে।</h2>
      </div>
    </div>
  );
}
