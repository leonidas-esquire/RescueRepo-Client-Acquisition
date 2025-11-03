import React, { useState } from 'react';
import './ClientModal.scss';

interface NewClientModalProps {
  onSave: (client: { name: string; status: string; projects: number }) => void;
  onClose: () => void;
}

export default function NewClientModal({ onSave, onClose }: NewClientModalProps) {
  const [formData, setFormData] = useState({ name: '', status: 'Prospect', projects: 0 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'projects' ? Number(value) : value,
    }));
  };

  const handleSubmit = () => {
    if (!formData.name.trim()) return alert('Client name cannot be empty');
    onSave(formData);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>
        <h2>Add New Client</h2>

        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Client Name" />

        <label>Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="Active">Active</option>
          <option value="Prospect">Prospect</option>
          <option value="Pending">Pending</option>
        </select>

        <label>Projects</label>
        <input type="number" name="projects" value={formData.projects} onChange={handleChange} />

        <button className="primary-btn" onClick={handleSubmit}>Add Client</button>
      </div>
    </div>
  );
}
