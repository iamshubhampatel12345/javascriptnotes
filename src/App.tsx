import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { ContentArea } from './components/ContentArea';
import { Menu, X, Code2, Sparkles } from 'lucide-react';

export default function App() {
  const [selectedTopic, setSelectedTopic] = useState('intro-to-js');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-gray-900/80 border-b border-gray-800/50 shadow-lg">
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="lg:hidden p-2 hover:bg-gradient-to-br hover:from-blue-600/20 hover:to-purple-600/20 rounded-lg transition-all duration-200"
            >
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Code2 size={28} className="text-blue-500" />
                <Sparkles size={14} className="absolute -top-1 -right-1 text-yellow-400" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  JavaScript Mastery
                </h1>
                <p className="text-xs text-gray-400">✨ From Zero to Hero</p>
              </div>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30">
            <span className="text-xs font-semibold text-blue-400">🚀 11 Phases</span>
            <span className="text-gray-600">•</span>
            <span className="text-xs font-semibold text-purple-400">37 Topics</span>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <Sidebar
          selectedTopic={selectedTopic}
          onTopicSelect={(topic) => {
            setSelectedTopic(topic);
            setIsSidebarOpen(false);
          }}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        {/* Main Content */}
        <main className="flex-1 min-h-[calc(100vh-73px)]">
          <ContentArea selectedTopic={selectedTopic} />
        </main>
      </div>
    </div>
  );
}