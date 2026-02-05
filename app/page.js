'use client';

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import DailyNotes from '@/components/DailyNotes';
import DischargeSummary from '@/components/DischargeSummary';
import { FileText, ClipboardList } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-2xl font-semibold text-gray-900">
            Clinical Documentation Helper
          </h1>
          <p className="mt-1 text-sm text-gray-600">
            Professional drafting tool for daily notes and discharge summaries
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <TabGroup>
          <TabList className="flex space-x-1 bg-white rounded-lg shadow-sm border border-gray-200 p-1 mb-6">
            <Tab
              className={({ selected }) =>
                `flex-1 flex items-center justify-center gap-2 py-3 px-4 text-sm font-medium rounded-md transition-colors ${
                  selected
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              <FileText className="w-4 h-4" />
              Daily Notes
            </Tab>
            <Tab
              className={({ selected }) =>
                `flex-1 flex items-center justify-center gap-2 py-3 px-4 text-sm font-medium rounded-md transition-colors ${
                  selected
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              <ClipboardList className="w-4 h-4" />
              Discharge Summary
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <DailyNotes />
            </TabPanel>
            <TabPanel>
              <DischargeSummary />
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </main>

      {/* Footer Disclaimer */}
      <footer className="border-t border-gray-200 bg-white mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-sm text-gray-600 text-center">
            <span className="font-semibold">Disclaimer:</span> Draft only. Review before clinical use. No patient data is stored.
          </p>
        </div>
      </footer>
    </div>
  );
}
