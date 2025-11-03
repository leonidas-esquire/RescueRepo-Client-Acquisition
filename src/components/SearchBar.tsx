import React from 'react';
import './SearchBar.scss';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  statusFilter: string;
  setStatusFilter: (status: string) => void;
}

export default function SearchBar({ searchTerm, setSearchTerm, statusFilter, setStatusFilter }: SearchBarProps) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="🔍 Search clients..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
        <option value="">All Statuses</option>
        <option value="Active">Active</option>
        <option value="Prospect">Prospect</option>
        <option value="Pending">Pending</option>
      </select>
    </div>
  );
}
