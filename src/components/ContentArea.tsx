import React from 'react';
import { topicsData } from '../data/topicsData';
import { CodeBlock } from './CodeBlock';
import { BookOpen, Lightbulb, Rocket, Info } from 'lucide-react';

interface ContentAreaProps {
  selectedTopic: string;
}

export function ContentArea({ selectedTopic }: ContentAreaProps) {
  const topic = topicsData[selectedTopic];

  if (!topic) {
    return (
      <div className="p-8 flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <p className="text-gray-400 text-lg">Topic not found</p>
        </div>
      </div>
    );
  }

  if (!topic.sections || topic.sections.length === 0) {
    return (
      <div className="p-8 flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="text-6xl mb-4">🚧</div>
          <h1 className="text-3xl font-bold mb-2">{topic.title}</h1>
          <p className="text-gray-400">Content coming soon! Stay tuned 🎉</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 lg:p-8">
      {/* Title with gradient background card */}
      <div className="mb-8 rounded-2xl bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 border border-blue-500/20 p-6 shadow-xl">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
            <BookOpen className="text-white" size={24} />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              {topic.title}
            </h1>
            {topic.phase && (
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-xs font-semibold text-blue-300">
                  📍 Phase {topic.phase}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="space-y-8">
        {topic.sections.map((section, index) => (
          <section key={index} className="space-y-4">
            {section.subtitle && (
              <div className="flex items-center gap-3 mt-8">
                <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                  {section.subtitle}
                </h2>
              </div>
            )}

            {section.content && (
              <div className="text-gray-300 leading-relaxed space-y-3 bg-gray-900/30 rounded-xl p-6 border border-gray-800/50">
                {section.content.split('\n').filter(para => para.trim()).map((para, i) => (
                  <p key={i} className="text-gray-300">{para}</p>
                ))}
              </div>
            )}

            {section.points && (
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-xl p-6 border border-gray-700/50">
                <ul className="space-y-3 text-gray-300">
                  {section.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold mt-0.5">
                        {i + 1}
                      </span>
                      <span className="flex-1 pt-0.5">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {section.code && (
              <CodeBlock
                code={section.code}
                language={section.language || 'javascript'}
              />
            )}

            {section.example && (
              <div className="relative overflow-hidden bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-xl p-5 shadow-lg">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-3xl"></div>
                <div className="relative">
                  <div className="flex items-center gap-2 mb-3">
                    <Lightbulb size={20} className="text-green-400" />
                    <p className="text-sm font-semibold text-green-400">
                      💡 Real-World Example
                    </p>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{section.example}</p>
                </div>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* Bottom Navigation Hint */}
      <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 text-center">
        <Rocket className="w-8 h-8 mx-auto mb-2 text-blue-400" />
        <p className="text-sm text-gray-400">
          🎯 Keep exploring! Check out more topics in the sidebar
        </p>
      </div>
    </div>
  );
}