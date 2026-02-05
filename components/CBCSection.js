'use client';

import CollapsibleCard from './CollapsibleCard';

export default function CBCSection({ data, onChange }) {
  const handleChange = (field, value) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <CollapsibleCard title="Complete Blood Count (CBC)">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Hemoglobin (HB)
          </label>
          <input
            type="text"
            value={data.hb || ''}
            onChange={(e) => handleChange('hb', e.target.value)}
            placeholder="g/dL"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Red Blood Cells (RBC)
          </label>
          <input
            type="text"
            value={data.rbc || ''}
            onChange={(e) => handleChange('rbc', e.target.value)}
            placeholder="million/μL"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            White Blood Cells (WBC)
          </label>
          <input
            type="text"
            value={data.wbc || ''}
            onChange={(e) => handleChange('wbc', e.target.value)}
            placeholder="cells/μL"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Platelets (PLT)
          </label>
          <input
            type="text"
            value={data.plt || ''}
            onChange={(e) => handleChange('plt', e.target.value)}
            placeholder="cells/μL"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </CollapsibleCard>
  );
}
