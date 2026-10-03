import React, { useState } from 'react';
import { PUBLIC_PROBLEMS, INSTITUTIONS, COMMITMENTS } from '../data/mockData';
import { MapPin, Layers, Building2, AlertCircle, ArrowRight, ShieldCheck, DollarSign } from 'lucide-react';

interface AtlasPreviewViewProps {
  onNavigate: (view: string, id?: string) => void;
}

export const AtlasPreviewView: React.FC<AtlasPreviewViewProps> = ({ onNavigate }) => {
  const [selectedWard, setSelectedWard] = useState<number>(8);

  const wardData: Record<number, {
    name: string;
    neighborhoods: string;
    population: string;
    rentBurden: string;
    homicidesYTD: number;
    affordableUnitsTarget: number;
    affordableUnitsDelivered: number;
    priorityIssue: string;
  }> = {
    1: { name: 'Ward 1', neighborhoods: 'Adams Morgan, Columbia Heights, Mount Pleasant', population: '85,200', rentBurden: '45.1%', homicidesYTD: 9, affordableUnitsTarget: 1400, affordableUnitsDelivered: 1120, priorityIssue: 'Housing Affordability' },
    2: { name: 'Ward 2', neighborhoods: 'Georgetown, Dupont Circle, Foggy Bottom', population: '89,600', rentBurden: '39.8%', homicidesYTD: 3, affordableUnitsTarget: 1600, affordableUnitsDelivered: 780, priorityIssue: 'Public Transit Reliability' },
    3: { name: 'Ward 3', neighborhoods: 'Chevy Chase, Cleveland Park, Tenleytown', population: '86,400', rentBurden: '36.2%', homicidesYTD: 1, affordableUnitsTarget: 1990, affordableUnitsDelivered: 420, priorityIssue: 'Housing Production Equity' },
    4: { name: 'Ward 4', neighborhoods: 'Petworth, Brightwood, Shepherd Park', population: '87,300', rentBurden: '44.3%', homicidesYTD: 11, affordableUnitsTarget: 1500, affordableUnitsDelivered: 980, priorityIssue: 'Public School Literacy' },
    5: { name: 'Ward 5', neighborhoods: 'Brookland, Eckington, Fort Lincoln', population: '91,200', rentBurden: '48.9%', homicidesYTD: 18, affordableUnitsTarget: 1800, affordableUnitsDelivered: 1850, priorityIssue: 'Traffic Safety & Bus Priority' },
    6: { name: 'Ward 6', neighborhoods: 'Capitol Hill, Navy Yard, Southwest Waterfront', population: '92,500', rentBurden: '41.2%', homicidesYTD: 14, affordableUnitsTarget: 2200, affordableUnitsDelivered: 2410, priorityIssue: 'Public Transit Reliability' },
    7: { name: 'Ward 7', neighborhoods: 'Deanwood, Hillcrest, Minnesota Ave', population: '84,100', rentBurden: '52.4%', homicidesYTD: 38, affordableUnitsTarget: 1400, affordableUnitsDelivered: 1290, priorityIssue: 'Public Safety & Violent Crime' },
    8: { name: 'Ward 8', neighborhoods: 'Anacostia, Congress Heights, Bellevue', population: '83,900', rentBurden: '56.8%', homicidesYTD: 48, affordableUnitsTarget: 1300, affordableUnitsDelivered: 1110, priorityIssue: 'Public Safety & Homelessness' },
  };

  const currentWard = wardData[selectedWard];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-amber-50 text-amber-800 border border-amber-300 mb-2">
          Future Interoperability Concept • Prototype Preview
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-black text-slate-900">
          Problem Atlas Geographic Integration
        </h1>
        <p className="text-sm text-slate-600 max-w-3xl mt-2 leading-relaxed">
          Inspect how The POWER Standard can connect directly to geographic maps. Users will be able to click any neighborhood or political ward to inspect local public problems, severity indicators, responsible authorities, and active public spending.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Ward Selection Grid & Interactive Map Representation */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-serif font-bold text-slate-900 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-indigo-700" />
              <span>Washington, DC — Ward Navigation</span>
            </h2>
            <span className="text-xs font-mono text-slate-400">Select Ward</span>
          </div>

          {/* Interactive Ward Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((wardNum) => {
              const isSelected = selectedWard === wardNum;
              return (
                <button
                  key={wardNum}
                  type="button"
                  onClick={() => setSelectedWard(wardNum)}
                  className={`p-4 rounded-xl border text-center transition-all ${
                    isSelected
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-indigo-500/20'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300'
                  }`}
                >
                  <span className={`text-[10px] font-mono block uppercase ${isSelected ? 'text-indigo-300' : 'text-slate-400'}`}>
                    District of Columbia
                  </span>
                  <div className="text-xl font-serif font-black">Ward {wardNum}</div>
                  <span className={`text-[10px] truncate block mt-1 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                    {wardData[wardNum].neighborhoods.split(',')[0]}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Stylized Visual Atlas Map Representation */}
          <div className="bg-slate-950 text-slate-200 rounded-xl p-6 relative overflow-hidden border border-slate-800">
            <div className="flex items-center justify-between text-xs font-mono mb-4 text-slate-400">
              <span>Geographic Boundary Layer: DC Ward {selectedWard}</span>
              <span className="text-emerald-400">Census Tract Telemetry Active</span>
            </div>

            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="border border-slate-800 bg-slate-900/80 p-3.5 rounded-lg space-y-1">
                <span className="text-[10px] uppercase font-mono text-slate-400">Rent Burden Rate</span>
                <div className="text-2xl font-mono font-bold text-white">{currentWard.rentBurden}</div>
                <span className="text-[10px] text-slate-400">Households paying &gt;30% gross rent</span>
              </div>

              <div className="border border-slate-800 bg-slate-900/80 p-3.5 rounded-lg space-y-1">
                <span className="text-[10px] uppercase font-mono text-slate-400">Homicides YTD</span>
                <div className="text-2xl font-mono font-bold text-rose-400">{currentWard.homicidesYTD}</div>
                <span className="text-[10px] text-slate-400">MPD Precinct Dispatches</span>
              </div>
            </div>

            <div className="text-xs text-slate-400 pt-2 border-t border-slate-800 flex items-center justify-between">
              <span>Neighborhoods: <strong>{currentWard.neighborhoods}</strong></span>
              <span className="font-mono">Pop: {currentWard.population}</span>
            </div>
          </div>
        </div>

        {/* Right: Ward Civic Responsibility & Spending Dossier */}
        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-5">
          <div>
            <div className="text-xs font-mono text-indigo-700 font-bold uppercase mb-1">
              Geographic Accountability Dossier
            </div>
            <h3 className="text-2xl font-serif font-bold text-slate-900">
              {currentWard.name} Civic Profile
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Top tracked civic problem: <strong className="text-slate-900">{currentWard.priorityIssue}</strong>
            </p>
          </div>

          {/* Affordable Housing Delivery Progress */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2 text-xs">
            <div className="flex justify-between items-center">
              <span className="font-bold text-slate-700">Mayor’s Order 2019-036 Housing Target:</span>
              <span className="font-mono font-bold text-slate-900">
                {currentWard.affordableUnitsDelivered} / {currentWard.affordableUnitsTarget} units
              </span>
            </div>
            {/* Progress bar */}
            <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
              <div 
                className="bg-indigo-600 h-full rounded-full transition-all"
                style={{ width: `${Math.min(100, (currentWard.affordableUnitsDelivered / currentWard.affordableUnitsTarget) * 100)}%` }}
              />
            </div>
            <div className="text-[10px] text-slate-500 flex justify-between font-mono">
              <span>Progress: {((currentWard.affordableUnitsDelivered / currentWard.affordableUnitsTarget) * 100).toFixed(1)}%</span>
              <span>Target Year: 2025</span>
            </div>
          </div>

          {/* Key Responsible Institutions */}
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase font-bold text-slate-400 block">
              Primary Responsible Institutions
            </span>
            <div className="space-y-1.5 text-xs">
              <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-900">Executive Office of the Mayor</div>
                  <div className="text-slate-500">Executive direction & departmental deployment</div>
                </div>
                <span className="text-[10px] font-mono bg-blue-100 text-blue-900 px-1.5 py-0.5 rounded">Citywide</span>
              </div>
              <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-900">Council of the District of Columbia</div>
                  <div className="text-slate-500">Legislative oversight & capital budget allocations</div>
                </div>
                <span className="text-[10px] font-mono bg-indigo-100 text-indigo-900 px-1.5 py-0.5 rounded">Ward & At-Large</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={() => onNavigate('problems')}
              className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg text-xs transition-colors flex items-center justify-center gap-2"
            >
              <span>Inspect Full Accountability Records for this Ward</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
