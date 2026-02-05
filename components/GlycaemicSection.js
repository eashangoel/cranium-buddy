'use client';

import CollapsibleCard from './CollapsibleCard';

export default function GlycaemicSection({ data, onChange }) {
  const handleChange = (field, value) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <CollapsibleCard title="Glycaemic Status">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            HbA1c
          </label>
          <input
            type="text"
            value={data.hba1c || ''}
            onChange={(e) => handleChange('hba1c', e.target.value)}
            placeholder="%"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Fasting Blood Sugar (FBS)
          </label>
          <input
            type="text"
            value={data.fbs || ''}
            onChange={(e) => handleChange('fbs', e.target.value)}
            placeholder="mg/dL"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Random Blood Sugar (GRBS)
          </label>
          <input
            type="text"
            value={data.grbs || ''}
            onChange={(e) => handleChange('grbs', e.target.value)}
            placeholder="mg/dL"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </CollapsibleCard>
  );
}
