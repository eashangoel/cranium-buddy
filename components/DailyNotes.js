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
import { Loader2, Copy, Check, Sparkles } from 'lucide-react';

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
  const [showOutput, setShowOutput] = useState(false);

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
    setShowOutput(false);
  };

  const handleGenerate = async () => {
    setIsLoading(true);
    setError('');
    setShowOutput(false);
    
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
      setShowOutput(true);
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
        <div className="flex gap-3 mt-6">
          <button
            onClick={handleGenerate}
            disabled={isLoading}
            className={`flex-1 btn-gradient ${isLoading ? 'loading' : ''} text-white font-semibold py-3.5 px-6 rounded-lg shadow-lg flex items-center justify-center gap-2 min-h-[48px]`}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Generating...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                <span>Generate Daily Note</span>
              </>
            )}
          </button>
          <button
            onClick={handleClearForm}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3.5 px-6 rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 min-h-[48px]"
          >
            Clear
          </button>
        </div>
      </div>

      {/* RIGHT COLUMN - Output */}
      <div className="lg:sticky lg:top-4 lg:self-start">
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 card-hover">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Generated Note</h2>
            {generatedNote && (
              <button
                onClick={handleCopy}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-300 text-sm font-medium min-h-[40px] ${
                  copied
                    ? 'bg-green-100 text-green-700 success-check'
                    : 'bg-gray-100 hover:bg-purple-50 text-gray-700 hover:text-purple-700 hover:ring-2 hover:ring-purple-200'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            )}
          </div>
          
          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md animate-fade-in-up">
              <p className="text-sm text-red-800">{error}</p>
            </div>
          )}
          
          <textarea
            value={generatedNote}
            onChange={(e) => setGeneratedNote(e.target.value)}
            placeholder="Generated clinical note will appear here..."
            rows={20}
            className={`w-full px-4 py-3 border border-gray-300 rounded-md input-glow focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 resize-vertical ${showOutput ? 'animate-fade-in-up' : ''}`}
          />
        </div>
      </div>
    </div>
  );
}
