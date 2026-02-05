'use client';

import CollapsibleCard from './CollapsibleCard';
import { Droplets } from 'lucide-react';

export default function UrineSection({ data, onChange }) {
  const handleChange = (field, value) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <CollapsibleCard title="Urine Routine" icon={Droplets}>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Urine Routine Results
        </label>
        <textarea
          value={data.urineRoutine || ''}
          onChange={(e) => handleChange('urineRoutine', e.target.value)}
          placeholder="Enter urine routine findings..."
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md input-glow focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 resize-vertical"
        />
      </div>
    </CollapsibleCard>
  );
}
