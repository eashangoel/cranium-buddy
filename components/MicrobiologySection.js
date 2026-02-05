'use client';

import CollapsibleCard from './CollapsibleCard';
import { Bug } from 'lucide-react';

export default function MicrobiologySection({ data, onChange }) {
  const handleChange = (field, value) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <CollapsibleCard title="Microbiology" icon={Bug}>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Cultures
        </label>
        <textarea
          value={data.cultures || ''}
          onChange={(e) => handleChange('cultures', e.target.value)}
          placeholder="Enter culture results..."
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md input-glow focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 resize-vertical"
        />
      </div>
    </CollapsibleCard>
  );
}
