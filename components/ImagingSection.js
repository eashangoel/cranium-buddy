'use client';

import CollapsibleCard from './CollapsibleCard';

export default function ImagingSection({ data, onChange }) {
  const handleChange = (field, value) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <CollapsibleCard title="Imaging / Procedures">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Echocardiogram (ECHO)
          </label>
          <textarea
            value={data.echo || ''}
            onChange={(e) => handleChange('echo', e.target.value)}
            placeholder="Enter ECHO findings..."
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Ultrasound (USG)
          </label>
          <textarea
            value={data.usg || ''}
            onChange={(e) => handleChange('usg', e.target.value)}
            placeholder="Enter USG findings..."
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            CT Scan
          </label>
          <textarea
            value={data.ct || ''}
            onChange={(e) => handleChange('ct', e.target.value)}
            placeholder="Enter CT findings..."
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical"
          />
        </div>
      </div>
    </CollapsibleCard>
  );
}
