'use client';

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import DailyNotes from '@/components/DailyNotes';
import DischargeSummary from '@/components/DischargeSummary';
import { FileText, ClipboardList, Shield, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 w-full">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 shadow-lg w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                Clinical Documentation Helper
              </h1>
              <p className="mt-1 text-sm text-purple-100">
                Professional drafting tool for daily notes and discharge summaries
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <TabGroup>
          <TabList className="flex space-x-1 bg-white rounded-xl shadow-md border border-gray-200 p-1.5 mb-6">
            <Tab
              className={({ selected }) =>
                `flex-1 flex items-center justify-center gap-2 py-3.5 px-4 text-sm font-semibold rounded-lg transition-all duration-300 min-h-[48px] ${
                  selected
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-[1.02]'
                    : 'text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:text-purple-700'
                }`
              }
            >
              <FileText className="w-5 h-5" />
              <span className="hidden sm:inline">Daily Notes</span>
              <span className="sm:hidden">Daily</span>
            </Tab>
            <Tab
              className={({ selected }) =>
                `flex-1 flex items-center justify-center gap-2 py-3.5 px-4 text-sm font-semibold rounded-lg transition-all duration-300 min-h-[48px] ${
                  selected
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg transform scale-[1.02]'
                    : 'text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:text-purple-700'
                }`
              }
            >
              <ClipboardList className="w-5 h-5" />
              <span className="hidden sm:inline">Discharge Summary</span>
              <span className="sm:hidden">Discharge</span>
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel className="animate-fade-in-up">
              <DailyNotes />
            </TabPanel>
            <TabPanel className="animate-fade-in-up">
              <DischargeSummary />
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </main>

      {/* Footer Disclaimer */}
      <footer className="border-t border-gray-200 bg-white mt-12 w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-purple-600" />
              <span className="font-semibold text-gray-900">Disclaimer:</span>
            </div>
            <span className="text-center sm:text-left">
              Draft only. Review before clinical use. No patient data is stored.
            </span>
          </div>
        </div>
        {/* Subtle gradient line */}
        <div className="h-1 bg-gradient-to-r from-purple-600 via-purple-400 to-blue-600"></div>
      </footer>
    </div>
  );
}
