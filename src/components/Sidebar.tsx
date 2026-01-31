import React from 'react';
import { ChevronDown, ChevronRight, BookOpen, Zap } from 'lucide-react';
import { jsTopics } from '../data/topics';

interface SidebarProps {
  selectedTopic: string;
  onTopicSelect: (topicId: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ selectedTopic, onTopicSelect, isOpen, onClose }: SidebarProps) {
  const [expandedPhases, setExpandedPhases] = React.useState<Set<string>>(
    new Set() // Don't expand any phases by default
  );

  const togglePhase = (phase: string) => {
    const newExpanded = new Set(expandedPhases);
    if (newExpanded.has(phase)) {
      newExpanded.delete(phase);
    } else {
      newExpanded.add(phase);
    }
    setExpandedPhases(newExpanded);
  };

  const phaseEmojis = ['📚', '⚙️', '🏗️', '⏱️', '🎯', '🌐', '✨', '⚡', '🐛', '🖥️', '🔒'];

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:sticky top-[73px] left-0 h-[calc(100vh-73px)] w-80 
          bg-gradient-to-b from-gray-900 to-gray-950 border-r border-gray-800/50
          overflow-y-auto z-30 transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent
        `}
      >
        <div className="p-4 space-y-2">
          {jsTopics.map((phaseData, phaseIndex) => {
            const phaseNumber = phaseData.phase.match(/\d+/)?.[0] || '1';
            const emoji = phaseEmojis[phaseIndex] || '📖';
            
            return (
              <div key={phaseData.id} className="space-y-1">
                <button
                  onClick={() => togglePhase(phaseNumber)}
                  className="w-full flex items-center gap-2 px-3 py-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-600/10 hover:to-purple-600/10 transition-all duration-200 text-left border border-transparent hover:border-blue-500/20 group"
                >
                  <span className="text-xl">{emoji}</span>
                  {expandedPhases.has(phaseNumber) ? (
                    <ChevronDown size={16} className="text-blue-400 group-hover:text-blue-300" />
                  ) : (
                    <ChevronRight size={16} className="text-gray-400 group-hover:text-blue-300" />
                  )}
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-gray-100 group-hover:text-blue-300 transition-colors">
                      {phaseData.phase}
                    </div>
                    {phaseData.description && (
                      <div className="text-xs text-gray-500 mt-0.5 line-clamp-2">
                        {phaseData.description}
                      </div>
                    )}
                  </div>
                </button>

                {expandedPhases.has(phaseNumber) && (
                  <div className="ml-6 space-y-1 animate-in slide-in-from-top-2 duration-200">
                    {phaseData.topics.map((topic, topicIndex) => (
                      <button
                        key={topic.id}
                        onClick={() => onTopicSelect(topic.id)}
                        className={`
                          w-full text-left px-3 py-2.5 rounded-lg text-sm transition-all duration-200
                          flex items-center gap-2 group
                          ${
                            selectedTopic === topic.id
                              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20'
                              : 'text-gray-300 hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 hover:text-blue-300 hover:border-blue-500/30 border border-transparent'
                          }
                        `}
                      >
                        {selectedTopic === topic.id ? (
                          <Zap size={14} className="text-yellow-300" />
                        ) : (
                          <BookOpen size={14} className="text-gray-500 group-hover:text-blue-400" />
                        )}
                        <span className="flex-1">{topic.title}</span>
                        <span className="text-xs opacity-50">
                          {String(topicIndex + 1).padStart(2, '0')}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        {/* Footer */}
        <div className="sticky bottom-0 p-4 bg-gradient-to-t from-gray-950 to-transparent">
          <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-3 text-center">
            <p className="text-xs text-gray-400">💡 Keep learning, keep growing!</p>
          </div>
        </div>
      </aside>
    </>
  );
}