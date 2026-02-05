'use client';

import CollapsibleCard from './CollapsibleCard';

export default function UrineSection({ data, onChange }) {
  const handleChange = (field, value) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <CollapsibleCard title="Urine Routine">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Urine Routine Results
        </label>
        <textarea
          value={data.urineRoutine || ''}
          onChange={(e) => handleChange('urineRoutine', e.target.value)}
          placeholder="Enter urine routine findings..."
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical"
        />
      </div>
    </CollapsibleCard>
  );
}
