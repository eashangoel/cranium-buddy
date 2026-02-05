'use client';

import CollapsibleCard from './CollapsibleCard';
import { Activity } from 'lucide-react';

export default function RenalSection({ data, onChange }) {
  const handleChange = (field, value) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <CollapsibleCard title="Renal Function Tests" icon={Activity}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Urea
          </label>
          <input
            type="text"
            value={data.urea || ''}
            onChange={(e) => handleChange('urea', e.target.value)}
            placeholder="mg/dL"
            className="w-full px-3 py-2 border border-gray-300 rounded-md input-glow focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Creatinine
          </label>
          <input
            type="text"
            value={data.creatinine || ''}
            onChange={(e) => handleChange('creatinine', e.target.value)}
            placeholder="mg/dL"
            className="w-full px-3 py-2 border border-gray-300 rounded-md input-glow focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
          />
        </div>
      </div>
    </CollapsibleCard>
  );
}
