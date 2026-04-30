import PageHeader from '@/components/page-header';

export default function Construction() {
  return (
    <div className="min-h-screen bg-slate-50">
      <PageHeader titleBn="নির্মাণ সেবা" titleEn="Construction" />
      <div className="max-w-4xl mx-auto p-8 bg-white my-8 rounded-xl shadow-sm border border-slate-100">
        <h2 className="text-2xl font-bold text-slate-800">বাড়ি নির্মাণ সেবা শীঘ্রই আসছে।</h2>
      </div>
    </div>
  );
}
