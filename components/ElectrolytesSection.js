'use client';

import CollapsibleCard from './CollapsibleCard';
import { Beaker } from 'lucide-react';

export default function ElectrolytesSection({ data, onChange }) {
  const handleChange = (field, value) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <CollapsibleCard title="Electrolytes" icon={Beaker}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Sodium (Na)
          </label>
          <input
            type="text"
            value={data.sodium || ''}
            onChange={(e) => handleChange('sodium', e.target.value)}
            placeholder="mEq/L"
            className="w-full px-3 py-2 border border-gray-300 rounded-md input-glow focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Potassium (K)
          </label>
          <input
            type="text"
            value={data.potassium || ''}
            onChange={(e) => handleChange('potassium', e.target.value)}
            placeholder="mEq/L"
            className="w-full px-3 py-2 border border-gray-300 rounded-md input-glow focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Chloride (Cl)
          </label>
          <input
            type="text"
            value={data.chloride || ''}
            onChange={(e) => handleChange('chloride', e.target.value)}
            placeholder="mEq/L"
            className="w-full px-3 py-2 border border-gray-300 rounded-md input-glow focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
          />
        </div>
      </div>
    </CollapsibleCard>
  );
}
