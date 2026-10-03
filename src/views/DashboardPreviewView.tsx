import React from 'react';
import { Calendar, Bell, Building2, FileText, CheckCircle2, Bookmark, MapPin, ArrowRight } from 'lucide-react';

interface DashboardPreviewViewProps {
  onNavigate: (view: string, id?: string) => void;
}

export const DashboardPreviewView: React.FC<DashboardPreviewViewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Concept Notice Banner */}
      <div className="bg-amber-50 border border-amber-300 rounded-xl p-4 text-xs text-amber-900 flex items-start justify-between gap-4">
        <div>
          <span className="font-mono font-bold uppercase tracking-wider block text-[10px] text-amber-800 mb-0.5">
            Future Feature / Prototype Concept Only
          </span>
          <strong className="text-sm font-bold block mb-1">My Civic Dashboard (Personalized Accountability View)</strong>
          <p className="max-w-2xl text-amber-800 leading-relaxed">
            In future iterations of The POWER Standard, citizens will be able to follow their specific neighborhood, Advisory Neighborhood Commission (ANC), relevant legislative bills, and public hearing schedules without partisan curation.
          </p>
        </div>
        <span className="bg-white/80 px-2 py-1 rounded text-[10px] font-mono font-bold text-amber-800 shrink-0 border border-amber-300">
          Non-Authenticated Preview
        </span>
      </div>

      {/* Simulated User Preferences Bar */}
      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-center justify-between flex-wrap gap-4 text-xs">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-indigo-700" />
          <span className="text-slate-500">Active Civic Location:</span>
          <strong className="text-slate-900 font-mono">Washington, DC • Ward 6 / ANC 6B</strong>
        </div>
        <div className="flex items-center gap-2 text-slate-500">
          <span>Following: <strong>3 Problems</strong>, <strong>4 Institutions</strong>, <strong>2 Active Bills</strong></span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Representative Institutions & Offices */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="font-serif font-bold text-base text-slate-900 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-indigo-700" />
              <span>My Representative Institutions</span>
            </h2>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
              <div className="font-bold text-slate-900">Council of the District of Columbia</div>
              <div className="text-slate-500">Ward 6 Member & 4 At-Large Members</div>
              <div className="text-[10px] font-mono text-indigo-700">Authority: Legislative & Budgetary Approval</div>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
              <div className="font-bold text-slate-900">Executive Office of the Mayor</div>
              <div className="text-slate-500">Chief Executive of Municipal Agencies</div>
              <div className="text-[10px] font-mono text-indigo-700">Authority: Agency Enforcement & Budget Proposal</div>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
              <div className="font-bold text-slate-900">Advisory Neighborhood Commission 6B</div>
              <div className="text-slate-500">Local grassroots advisory body</div>
              <div className="text-[10px] font-mono text-indigo-700">Authority: Statutory "Great Weight" on Zoning/Permits</div>
            </div>
          </div>
        </div>

        {/* Middle Column: Active Legislation & Budget Items */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="font-serif font-bold text-base text-slate-900 flex items-center gap-2">
              <FileText className="w-4 h-4 text-indigo-700" />
              <span>Active Legislation & Budgets</span>
            </h2>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-mono font-bold text-indigo-800">Bill 25-0345</span>
                <span className="bg-emerald-100 text-emerald-900 text-[10px] px-1.5 py-0.2 rounded font-mono">Enacted</span>
              </div>
              <div className="font-bold text-slate-900">Secure DC Omnibus Amendment Act</div>
              <p className="text-slate-500 text-[11px]">Consolidated criminal statutes, pretrial detention, and gun penalty updates.</p>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-mono font-bold text-emerald-800">FY2025 Budget Act</span>
                <span className="bg-blue-100 text-blue-900 text-[10px] px-1.5 py-0.2 rounded font-mono">In Effect</span>
              </div>
              <div className="font-bold text-slate-900">Housing Production Trust Fund Line Item</div>
              <p className="text-slate-500 text-[11px]">Allocated $100M baseline for affordable housing loan underwriting.</p>
            </div>
          </div>
        </div>

        {/* Right Column: Upcoming Public Meetings & Comment Windows */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="font-serif font-bold text-base text-slate-900 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-indigo-700" />
              <span>Public Comment Opportunities</span>
            </h2>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
              <div className="font-mono text-indigo-700 font-bold text-[11px]">Thursday, 10:00 AM</div>
              <div className="font-bold text-slate-900">Council Committee on Housing Oversight</div>
              <div className="text-slate-500">Public testimony window on DCHA voucher delays</div>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
              <div className="font-mono text-indigo-700 font-bold text-[11px]">Next Tuesday, 6:00 PM</div>
              <div className="font-bold text-slate-900">WMATA Public Tariff & Service Hearing</div>
              <div className="text-slate-500">Proposed bus priority corridor route refinements</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
