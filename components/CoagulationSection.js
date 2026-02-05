'use client';

import CollapsibleCard from './CollapsibleCard';
import { Zap } from 'lucide-react';

export default function CoagulationSection({ data, onChange }) {
  const handleChange = (field, value) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <CollapsibleCard title="Coagulation Profile" icon={Zap}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Prothrombin Time (PT)
          </label>
          <input
            type="text"
            value={data.pt || ''}
            onChange={(e) => handleChange('pt', e.target.value)}
            placeholder="seconds"
            className="w-full px-3 py-2 border border-gray-300 rounded-md input-glow focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            APTT
          </label>
          <input
            type="text"
            value={data.aptt || ''}
            onChange={(e) => handleChange('aptt', e.target.value)}
            placeholder="seconds"
            className="w-full px-3 py-2 border border-gray-300 rounded-md input-glow focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            INR
          </label>
          <input
            type="text"
            value={data.inr || ''}
            onChange={(e) => handleChange('inr', e.target.value)}
            placeholder="ratio"
            className="w-full px-3 py-2 border border-gray-300 rounded-md input-glow focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
          />
        </div>
      </div>
    </CollapsibleCard>
  );
}
