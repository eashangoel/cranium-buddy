'use client';

import { useState } from 'react';
import VitalsSection from './VitalsSection';
import CBCSection from './CBCSection';
import RenalSection from './RenalSection';
import LiverSection from './LiverSection';
import CoagulationSection from './CoagulationSection';
import ElectrolytesSection from './ElectrolytesSection';
import GlycaemicSection from './GlycaemicSection';
import InflammatorySection from './InflammatorySection';
import MineralsSection from './MineralsSection';
import MicrobiologySection from './MicrobiologySection';
import UrineSection from './UrineSection';
import ImagingSection from './ImagingSection';
import { Loader2, Copy, Check } from 'lucide-react';

export default function DailyNotes() {
  const [formData, setFormData] = useState({
    vitals: {},
    cbc: {},
    renal: {},
    liver: {},
    coagulation: {},
    electrolytes: {},
    glycaemic: {},
    inflammatory: {},
    minerals: {},
    microbiology: {},
    urine: {},
    imaging: {}
  });
  
  const [generatedNote, setGeneratedNote] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSectionChange = (section, data) => {
    setFormData(prev => ({
      ...prev,
      [section]: data
    }));
  };

  const handleClearForm = () => {
    setFormData({
      vitals: {},
      cbc: {},
      renal: {},
      liver: {},
      coagulation: {},
      electrolytes: {},
      glycaemic: {},
      inflammatory: {},
      minerals: {},
      microbiology: {},
      urine: {},
      imaging: {}
    });
    setGeneratedNote('');
    setError('');
  };

  const handleGenerate = async () => {
    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/generate-daily-note', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to generate note');
      }

      const data = await response.json();
      setGeneratedNote(data.note);
    } catch (err) {
      setError('Failed to generate note. Please check your API key and try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedNote);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* LEFT COLUMN - Form */}
      <div className="space-y-4">
        <VitalsSection 
          data={formData.vitals} 
          onChange={(data) => handleSectionChange('vitals', data)} 
        />
        <CBCSection 
          data={formData.cbc} 
          onChange={(data) => handleSectionChange('cbc', data)} 
        />
        <RenalSection 
          data={formData.renal} 
          onChange={(data) => handleSectionChange('renal', data)} 
        />
        <LiverSection 
          data={formData.liver} 
          onChange={(data) => handleSectionChange('liver', data)} 
        />
        <CoagulationSection 
          data={formData.coagulation} 
          onChange={(data) => handleSectionChange('coagulation', data)} 
        />
        <ElectrolytesSection 
          data={formData.electrolytes} 
          onChange={(data) => handleSectionChange('electrolytes', data)} 
        />
        <GlycaemicSection 
          data={formData.glycaemic} 
          onChange={(data) => handleSectionChange('glycaemic', data)} 
        />
        <InflammatorySection 
          data={formData.inflammatory} 
          onChange={(data) => handleSectionChange('inflammatory', data)} 
        />
        <MineralsSection 
          data={formData.minerals} 
          onChange={(data) => handleSectionChange('minerals', data)} 
        />
        <MicrobiologySection 
          data={formData.microbiology} 
          onChange={(data) => handleSectionChange('microbiology', data)} 
        />
        <UrineSection 
          data={formData.urine} 
          onChange={(data) => handleSectionChange('urine', data)} 
        />
        <ImagingSection 
          data={formData.imaging} 
          onChange={(data) => handleSectionChange('imaging', data)} 
        />

        {/* Action Buttons */}
        <div className="flex gap-3 sticky bottom-4">
          <button
            onClick={handleGenerate}
            disabled={isLoading}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Generating...
              </>
            ) : (
              'Generate Daily Note'
            )}
          </button>
          <button
            onClick={handleClearForm}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Clear Form
          </button>
        </div>
      </div>

      {/* RIGHT COLUMN - Output */}
      <div className="lg:sticky lg:top-4 lg:self-start">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Generated Note</h2>
            {generatedNote && (
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors text-sm font-medium"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy to Clipboard
                  </>
                )}
              </button>
            )}
          </div>
          
          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}
          
          <textarea
            value={generatedNote}
            onChange={(e) => setGeneratedNote(e.target.value)}
            placeholder="Generated clinical note will appear here..."
            rows={20}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm resize-vertical"
          />
        </div>
      </div>
    </div>
  );
}
