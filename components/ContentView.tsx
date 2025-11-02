
import React from 'react';
import type { FileNode } from '../types';

interface ContentViewProps {
  file: FileNode | null;
}

// Fix: Replaced JSX.Element with React.ReactElement to resolve namespace issue.
const renderMarkdown = (text: string): React.ReactElement[] => {
    const lines = text.split('\n');
    // Fix: Replaced JSX.Element with React.ReactElement to resolve namespace issue.
    const elements: React.ReactElement[] = [];
    let isCodeBlock = false;
    let codeBlockLang = '';
    let codeBlockContent: string[] = [];
    let listItems: string[] = [];

    const flushList = (key: string) => {
        if (listItems.length > 0) {
            elements.push(
                <ul key={key} className="pl-6 my-3 space-y-1 list-disc">
                    {listItems.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
            );
            listItems = [];
        }
    };

    lines.forEach((line, index) => {
        if (line.trim().startsWith('```')) {
            flushList(`list-before-code-${index}`);
            if (isCodeBlock) {
                elements.push(
                    <div key={`code-block-${index}`} className="my-4 rounded-lg bg-gray-950/70 border border-gray-700 overflow-hidden">
                        <div className="text-xs text-gray-400 bg-gray-800 px-4 py-1">{codeBlockLang}</div>
                        <pre className="p-4 overflow-x-auto">
                            <code className={`text-sm font-mono text-cyan-300`}>{codeBlockContent.join('\n')}</code>
                        </pre>
                    </div>
                );
                codeBlockContent = [];
                codeBlockLang = '';
            } else {
                codeBlockLang = line.trim().substring(3).trim();
            }
            isCodeBlock = !isCodeBlock;
            return;
        }

        if (isCodeBlock) {
            codeBlockContent.push(line);
            return;
        }

        if (!line.trim().startsWith('- ') && !line.trim().startsWith('* ')) {
            flushList(`list-${index}`);
        }

        if (line.startsWith('# ')) {
            elements.push(<h1 key={index} className="text-3xl lg:text-4xl font-bold mt-8 mb-4 border-b border-gray-600 pb-3 text-gray-100">{line.substring(2)}</h1>);
        } else if (line.startsWith('## ')) {
            elements.push(<h2 key={index} className="text-2xl lg:text-3xl font-semibold mt-7 mb-3 border-b border-gray-700 pb-2 text-gray-200">{line.substring(3)}</h2>);
        } else if (line.startsWith('### ')) {
            elements.push(<h3 key={index} className="text-xl lg:text-2xl font-semibold mt-6 mb-2 text-gray-300">{line.substring(4)}</h3>);
        } else if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
            listItems.push(line.trim().substring(2));
        } else if (line.trim() === '---' || line.trim() === '⸻') {
            elements.push(<hr key={index} className="my-8 border-gray-700" />);
        } else if (line.trim() !== '') {
            elements.push(<p key={index} className="my-3 leading-relaxed text-gray-300">{line}</p>);
        }
    });

    flushList('final-list');
    
    if (isCodeBlock && codeBlockContent.length > 0) {
        elements.push(
            <div key="final-code" className="my-4 rounded-lg bg-gray-950/70 border border-gray-700 overflow-hidden">
                <div className="text-xs text-gray-400 bg-gray-800 px-4 py-1">{codeBlockLang}</div>
                <pre className="p-4 overflow-x-auto">
                    <code className="text-sm font-mono text-cyan-300">{codeBlockContent.join('\n')}</code>
                </pre>
            </div>
        );
    }

    return elements;
};


const ContentView: React.FC<ContentViewProps> = ({ file }) => {
  if (!file) {
    return (
      <div className="flex items-center justify-center h-full text-gray-500">
        <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Client Acquisition System</h1>
            <p>Select a file from the sidebar to view its content.</p>
        </div>
      </div>
    );
  }

  const isJson = file.name.endsWith('.json');
  const isCsv = file.name.endsWith('.csv');

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10">
      <h1 className="text-lg font-semibold text-gray-400 mb-6 pb-2 border-b border-gray-700">{file.name}</h1>
      <div className="prose prose-invert max-w-none">
        {isJson || isCsv ? (
             <pre className="bg-gray-800/50 p-4 rounded-md overflow-x-auto my-4 w-full">
                <code className="text-sm font-mono text-yellow-300 whitespace-pre-wrap">{file.content}</code>
            </pre>
        ) : (
          renderMarkdown(file.content).map((el, i) => <div key={i}>{el}</div>)
        )}
      </div>
    </div>
  );
};

export default ContentView;
