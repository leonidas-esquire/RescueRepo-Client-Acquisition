
export interface FileNode {
  type: 'file';
  name: string;
  content: string;
}

export interface DirectoryNode {
  type: 'directory';
  name: string;
  children: TreeNode[];
}

export type TreeNode = FileNode | DirectoryNode;
