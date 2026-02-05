'use client';

import { useState } from 'react';
import { Loader2, Copy, Check, FileText, Sparkles } from 'lucide-react';

export default function DischargeSummary() {
  const [patientHistory, setPatientHistory] = useState('');
  const [generatedSummary, setGeneratedSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const [showOutput, setShowOutput] = useState(false);

  const handleClear = () => {
    setPatientHistory('');
    setGeneratedSummary('');
    setError('');
    setShowOutput(false);
  };

  const handleGenerate = async () => {
    if (!patientHistory.trim()) {
      setError('Please paste patient history before generating.');
      return;
    }

    setIsLoading(true);
    setError('');
    setShowOutput(false);
    
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
      setShowOutput(true);
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
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 card-hover">
        <div className="mb-4 flex items-start gap-3">
          <div className="p-2 bg-purple-100 rounded-lg">
            <FileText className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-1">Patient History from Cranium</h2>
            <p className="text-sm text-gray-600">
              Paste the complete patient history copied from Cranium below.
            </p>
          </div>
        </div>
        
        <textarea
          value={patientHistory}
          onChange={(e) => setPatientHistory(e.target.value)}
          placeholder="Paste patient history here..."
          rows={12}
          className="w-full px-4 py-3 border border-gray-300 rounded-md input-glow focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 resize-vertical"
        />

        {/* Action Buttons */}
        <div className="flex gap-3 mt-4">
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
                <span>Generate Discharge Summary</span>
              </>
            )}
          </button>
          <button
            onClick={handleClear}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3.5 px-6 rounded-lg transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 min-h-[48px]"
          >
            Clear
          </button>
        </div>
      </div>

      {/* Output Section */}
      {(generatedSummary || error) && (
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 card-hover animate-fade-in-up">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Generated Discharge Summary</h2>
            {generatedSummary && (
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
          
          {generatedSummary && (
            <textarea
              value={generatedSummary}
              onChange={(e) => setGeneratedSummary(e.target.value)}
              rows={20}
              className={`w-full px-4 py-3 border border-gray-300 rounded-md input-glow focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 resize-vertical document-style ${showOutput ? 'animate-fade-in-up' : ''}`}
            />
          )}
        </div>
      )}
    </div>
  );
}
