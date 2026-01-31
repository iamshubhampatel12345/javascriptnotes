import React, { useState } from 'react';
import { Copy, Check, Terminal, Code } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = 'javascript' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      // Try the modern Clipboard API first
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback method for when Clipboard API is blocked
      try {
        const textArea = document.createElement('textarea');
        textArea.value = code;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        
        if (successful) {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }
      } catch (fallbackErr) {
        console.error('Failed to copy text:', fallbackErr);
      }
    }
  };

  // Split code into lines for line numbers
  const lines = code.split('\n');

  return (
    <div className="relative group my-6">
      {/* Header Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-750 border border-gray-700/50 border-b-0 rounded-t-xl">
        <div className="flex items-center gap-2">
          <Code size={16} className="text-blue-400" />
          <span className="text-xs font-semibold text-gray-300 uppercase tracking-wider">{language}</span>
          <div className="flex gap-1.5 ml-2">
            <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
          </div>
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className={`
            px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-2 text-xs font-medium
            ${copied 
              ? 'bg-green-600 text-white shadow-lg shadow-green-500/30' 
              : 'bg-gray-700 hover:bg-blue-600 text-gray-200 hover:text-white hover:shadow-lg hover:shadow-blue-500/30'
            }
          `}
          title="Copy code"
        >
          {copied ? (
            <>
              <Check size={14} />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy size={14} />
              <span className="hidden sm:inline">Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Content with Line Numbers */}
      <div className="relative overflow-hidden rounded-b-xl border border-gray-700/50 border-t-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 shadow-2xl">
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-purple-600/5 pointer-events-none"></div>
        
        <div className="flex">
          {/* Line Numbers */}
          <div className="select-none py-4 px-3 bg-gray-900/50 border-r border-gray-700/30 min-w-[3rem] text-right">
            {lines.map((_, index) => (
              <div
                key={index}
                className="text-xs text-gray-600 leading-relaxed font-mono"
              >
                {index + 1}
              </div>
            ))}
          </div>

          {/* Code */}
          <div className="flex-1 overflow-x-auto">
            <pre className="p-4">
              <code className="text-sm text-gray-100 font-mono leading-relaxed block">{code}</code>
            </pre>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
      </div>
    </div>
  );
}