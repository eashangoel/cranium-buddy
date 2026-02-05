'use client';

import CollapsibleCard from './CollapsibleCard';
import { Flame } from 'lucide-react';

export default function InflammatorySection({ data, onChange }) {
  const handleChange = (field, value) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <CollapsibleCard title="Inflammatory Markers" icon={Flame}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            C-Reactive Protein (CRP)
          </label>
          <input
            type="text"
            value={data.crp || ''}
            onChange={(e) => handleChange('crp', e.target.value)}
            placeholder="mg/L"
            className="w-full px-3 py-2 border border-gray-300 rounded-md input-glow focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Erythrocyte Sedimentation Rate (ESR)
          </label>
          <input
            type="text"
            value={data.esr || ''}
            onChange={(e) => handleChange('esr', e.target.value)}
            placeholder="mm/hr"
            className="w-full px-3 py-2 border border-gray-300 rounded-md input-glow focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
          />
        </div>
      </div>
    </CollapsibleCard>
  );
}
