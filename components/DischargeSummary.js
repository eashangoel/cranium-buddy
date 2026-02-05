'use client';

import { useState } from 'react';
import { Loader2, Copy, Check } from 'lucide-react';

export default function DischargeSummary() {
  const [patientHistory, setPatientHistory] = useState('');
  const [generatedSummary, setGeneratedSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const handleClear = () => {
    setPatientHistory('');
    setGeneratedSummary('');
    setError('');
  };

  const handleGenerate = async () => {
    if (!patientHistory.trim()) {
      setError('Please paste patient history before generating.');
      return;
    }

    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/generate-discharge-summary', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ patientHistory }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate discharge summary');
      }

      const data = await response.json();
      setGeneratedSummary(data.summary);
    } catch (err) {
      setError('Failed to generate discharge summary. Please check your API key and try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedSummary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Input Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Patient History from Cranium</h2>
          <p className="text-sm text-gray-600">
            Paste the complete patient history copied from Cranium below.
          </p>
        </div>
        
        <textarea
          value={patientHistory}
          onChange={(e) => setPatientHistory(e.target.value)}
          placeholder="Paste patient history here..."
          rows={12}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical"
        />

        {/* Action Buttons */}
        <div className="flex gap-3 mt-4">
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
              'Generate Discharge Summary'
            )}
          </button>
          <button
            onClick={handleClear}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Output Section */}
      {(generatedSummary || error) && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Generated Discharge Summary</h2>
            {generatedSummary && (
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
          
          {generatedSummary && (
            <textarea
              value={generatedSummary}
              onChange={(e) => setGeneratedSummary(e.target.value)}
              rows={20}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm resize-vertical"
            />
          )}
        </div>
      )}
    </div>
  );
}
