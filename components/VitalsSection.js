'use client';

import CollapsibleCard from './CollapsibleCard';

export default function VitalsSection({ data, onChange }) {
  const handleChange = (field, value) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <CollapsibleCard title="Vitals" defaultOpen={true}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            BP Systolic
          </label>
          <input
            type="text"
            value={data.bpSystolic || ''}
            onChange={(e) => handleChange('bpSystolic', e.target.value)}
            placeholder="e.g., 120"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            BP Diastolic
          </label>
          <input
            type="text"
            value={data.bpDiastolic || ''}
            onChange={(e) => handleChange('bpDiastolic', e.target.value)}
            placeholder="e.g., 80"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Heart Rate (HR)
          </label>
          <input
            type="text"
            value={data.hr || ''}
            onChange={(e) => handleChange('hr', e.target.value)}
            placeholder="e.g., 72"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Respiratory Rate (RR)
          </label>
          <input
            type="text"
            value={data.rr || ''}
            onChange={(e) => handleChange('rr', e.target.value)}
            placeholder="e.g., 16"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            SpO2
          </label>
          <input
            type="text"
            value={data.spo2 || ''}
            onChange={(e) => handleChange('spo2', e.target.value)}
            placeholder="e.g., 98"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Oxygen Status
          </label>
          <select
            value={data.oxygenStatus || 'roomAir'}
            onChange={(e) => handleChange('oxygenStatus', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="roomAir">Room Air</option>
            <option value="oxygen">Oxygen</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Temperature (°F)
          </label>
          <input
            type="text"
            value={data.temperature || ''}
            onChange={(e) => handleChange('temperature', e.target.value)}
            placeholder="e.g., 98.6"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
    </CollapsibleCard>
  );
}
