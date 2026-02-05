'use client';

import CollapsibleCard from './CollapsibleCard';
import { Gem } from 'lucide-react';

export default function MineralsSection({ data, onChange }) {
  const handleChange = (field, value) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <CollapsibleCard title="Minerals" icon={Gem}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Calcium
          </label>
          <input
            type="text"
            value={data.calcium || ''}
            onChange={(e) => handleChange('calcium', e.target.value)}
            placeholder="mg/dL"
            className="w-full px-3 py-2 border border-gray-300 rounded-md input-glow focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phosphorus
          </label>
          <input
            type="text"
            value={data.phosphorus || ''}
            onChange={(e) => handleChange('phosphorus', e.target.value)}
            placeholder="mg/dL"
            className="w-full px-3 py-2 border border-gray-300 rounded-md input-glow focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Magnesium
          </label>
          <input
            type="text"
            value={data.magnesium || ''}
            onChange={(e) => handleChange('magnesium', e.target.value)}
            placeholder="mg/dL"
            className="w-full px-3 py-2 border border-gray-300 rounded-md input-glow focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
          />
        </div>
      </div>
    </CollapsibleCard>
  );
}
