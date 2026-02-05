'use client';

import CollapsibleCard from './CollapsibleCard';
import { Layers } from 'lucide-react';

export default function LiverSection({ data, onChange }) {
  const handleChange = (field, value) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <CollapsibleCard title="Liver Function Tests" icon={Layers}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Total Bilirubin
          </label>
          <input
            type="text"
            value={data.totalBilirubin || ''}
            onChange={(e) => handleChange('totalBilirubin', e.target.value)}
            placeholder="mg/dL"
            className="w-full px-3 py-2 border border-gray-300 rounded-md input-glow focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Conjugated Bilirubin
          </label>
          <input
            type="text"
            value={data.conjugatedBilirubin || ''}
            onChange={(e) => handleChange('conjugatedBilirubin', e.target.value)}
            placeholder="mg/dL"
            className="w-full px-3 py-2 border border-gray-300 rounded-md input-glow focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Unconjugated Bilirubin
          </label>
          <input
            type="text"
            value={data.unconjugatedBilirubin || ''}
            onChange={(e) => handleChange('unconjugatedBilirubin', e.target.value)}
            placeholder="mg/dL"
            className="w-full px-3 py-2 border border-gray-300 rounded-md input-glow focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Total Protein
          </label>
          <input
            type="text"
            value={data.totalProtein || ''}
            onChange={(e) => handleChange('totalProtein', e.target.value)}
            placeholder="g/dL"
            className="w-full px-3 py-2 border border-gray-300 rounded-md input-glow focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Albumin
          </label>
          <input
            type="text"
            value={data.albumin || ''}
            onChange={(e) => handleChange('albumin', e.target.value)}
            placeholder="g/dL"
            className="w-full px-3 py-2 border border-gray-300 rounded-md input-glow focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Globulin
          </label>
          <input
            type="text"
            value={data.globulin || ''}
            onChange={(e) => handleChange('globulin', e.target.value)}
            placeholder="g/dL"
            className="w-full px-3 py-2 border border-gray-300 rounded-md input-glow focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
          />
        </div>
      </div>
    </CollapsibleCard>
  );
}
