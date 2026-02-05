'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function CollapsibleCard({ title, children, defaultOpen = false, icon: Icon }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden card-hover ${isOpen ? 'border-l-4 border-l-purple-500' : ''} transition-all duration-300`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 transition-all duration-300 group"
      >
        <div className="flex items-center gap-3">
          {Icon && (
            <div className={`transition-all duration-300 ${isOpen ? 'text-purple-600' : 'text-gray-400 group-hover:text-purple-500'}`}>
              <Icon className="w-5 h-5" />
            </div>
          )}
          <h3 className={`text-base font-semibold transition-colors duration-300 ${isOpen ? 'text-purple-900' : 'text-gray-900'}`}>
            {title}
          </h3>
        </div>
        <ChevronDown 
          className={`w-5 h-5 text-gray-500 transition-all duration-300 ${isOpen ? 'rotate-180 text-purple-600' : 'group-hover:text-purple-500'}`}
        />
      </button>
      
      <div 
        className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
        style={{ overflow: isOpen ? 'visible' : 'hidden' }}
      >
        <div className="px-6 py-4 border-t border-gray-200 animate-fade-in-up">
          {children}
        </div>
      </div>
    </div>
  );
}
