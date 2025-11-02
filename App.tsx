
import React, { useState, useCallback, useMemo } from 'react';
import Sidebar from './components/Sidebar';
import ContentView from './components/ContentView';
import type { FileNode, TreeNode } from './types';
import { fileSystemData } from './data/systemData';
import { MenuIcon, CloseIcon } from './components/icons';

const App: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(['strategy']));
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const fileMap = useMemo(() => {
    const map = new Map<string, FileNode>();
    const traverse = (nodes: TreeNode[], path: string) => {
      nodes.forEach(node => {
        const currentPath = path ? `${path}/${node.name}` : node.name;
        if (node.type === 'file') {
          map.set(currentPath, node);
        } else if (node.type === 'directory') {
          traverse(node.children, currentPath);
        }
      });
    };
    traverse(fileSystemData.children, 'client-acquisition');
    return map;
  }, []);

  const handleFileSelect = useCallback((path: string) => {
    setSelectedFile(path);
    if(window.innerWidth < 768) { // md breakpoint
        setIsSidebarOpen(false);
    }
  }, []);

  const handleToggleFolder = useCallback((path: string) => {
    setExpandedFolders(prev => {
      const newSet = new Set(prev);
      if (newSet.has(path)) {
        newSet.delete(path);
      } else {
        newSet.add(path);
      }
      return newSet;
    });
  }, []);

  const currentFile = selectedFile ? fileMap.get(selectedFile) ?? null : null;

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-gray-900 text-gray-200">
      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 h-14 bg-gray-900/80 backdrop-blur-sm border-b border-gray-700 flex items-center justify-between px-4 z-20">
        <h1 className="text-lg font-semibold text-gray-200 truncate">Client Acquisition System</h1>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 -mr-2">
            {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </header>
      
      {/* Sidebar */}
      <aside className={`fixed md:relative top-14 md:top-0 h-[calc(100vh-3.5rem)] md:h-screen w-72 md:w-80 lg:w-96 flex-shrink-0 bg-gray-800/50 border-r border-gray-700/50 transform transition-transform duration-300 ease-in-out z-10 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
          <div className="p-4 border-b border-gray-700 hidden md:block">
              <h1 className="text-xl font-bold text-gray-100">GitHub Repo Architect</h1>
              <p className="text-sm text-gray-400">Client Acquisition System</p>
          </div>
          <div className="overflow-y-auto h-[calc(100%-4rem)] md:h-[calc(100%-5rem)] p-4">
            <Sidebar
                data={fileSystemData.children}
                selectedFile={selectedFile}
                onFileSelect={handleFileSelect}
                expandedFolders={expandedFolders}
                onToggleFolder={handleToggleFolder}
                basePath="client-acquisition"
            />
          </div>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pt-14 md:pt-0">
        <ContentView file={currentFile} />
      </main>
    </div>
  );
};

export default App;
