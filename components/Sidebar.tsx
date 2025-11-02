
import React from 'react';
import type { TreeNode } from '../types';
import { ChevronRightIcon, FileIcon, FolderIcon, JsonIcon } from './icons';

interface SidebarProps {
  data: TreeNode[];
  selectedFile: string | null;
  onFileSelect: (path: string) => void;
  expandedFolders: Set<string>;
  onToggleFolder: (path: string) => void;
  basePath?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ data, selectedFile, onFileSelect, expandedFolders, onToggleFolder, basePath = '' }) => {
  
  const sortedData = [...data].sort((a, b) => {
    if (a.type === 'directory' && b.type === 'file') {
      return -1;
    }
    if (a.type === 'file' && b.type === 'directory') {
      return 1;
    }
    return a.name.localeCompare(b.name);
  });
  
  return (
    <ul className="space-y-1">
      {sortedData.map(node => {
        const currentPath = basePath ? `${basePath}/${node.name}` : node.name;

        if (node.type === 'directory') {
          const isExpanded = expandedFolders.has(currentPath);
          return (
            <li key={currentPath}>
              <div
                className="flex items-center p-2 rounded-md cursor-pointer hover:bg-gray-700/50 text-gray-300"
                onClick={() => onToggleFolder(currentPath)}
              >
                <ChevronRightIcon
                  className={`mr-2 transform transition-transform duration-200 ${isExpanded ? 'rotate-90' : 'rotate-0'}`}
                />
                <FolderIcon className="mr-2 text-sky-400" />
                <span className="flex-1 truncate">{node.name}</span>
              </div>
              {isExpanded && (
                <div className="pl-5 border-l border-gray-700 ml-2.5">
                  <Sidebar
                    data={node.children}
                    selectedFile={selectedFile}
                    onFileSelect={onFileSelect}
                    expandedFolders={expandedFolders}
                    onToggleFolder={onToggleFolder}
                    basePath={currentPath}
                  />
                </div>
              )}
            </li>
          );
        }

        if (node.type === 'file') {
          const isSelected = selectedFile === currentPath;
          const isJson = node.name.endsWith('.json');
          return (
            <li key={currentPath}>
              <div
                className={`flex items-center p-2 rounded-md cursor-pointer group ${
                  isSelected ? 'bg-sky-600/30 text-sky-300' : 'hover:bg-gray-700/50 text-gray-400 hover:text-gray-200'
                }`}
                onClick={() => onFileSelect(currentPath)}
              >
                <div className="w-5 mr-2"></div> {/* Spacer for alignment */}
                {isJson ? <JsonIcon className="mr-2 text-yellow-400"/> : <FileIcon className="mr-2 text-gray-500 group-hover:text-gray-400"/>}
                <span className="flex-1 truncate">{node.name}</span>
              </div>
            </li>
          );
        }

        return null;
      })}
    </ul>
  );
};

export default Sidebar;
