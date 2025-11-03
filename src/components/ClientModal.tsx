import React, { useState } from 'react';
import './ClientModal.scss';

interface Client {
  name: string;
  status: string;
  projects: number;
}

interface ClientModalProps {
  client: Client | null;
  onSave: (updatedClient: Client) => void;
  onClose: () => void;
}

export default function ClientModal({ client, onSave, onClose }: ClientModalProps) {
  const [formData, setFormData] = useState<Client>(client || { name: '', status: '', projects: 0 });

  if (!client) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'projects' ? Number(value) : value,
    }));
  };

  const handleSubmit = () => {
    onSave(formData);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✕</button>
        <h2>Edit Client</h2>

        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          readOnly
        />

        <label>Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="Active">Active</option>
          <option value="Prospect">Prospect</option>
          <option value="Pending">Pending</option>
        </select>

        <label>Projects</label>
        <input
          type="number"
          name="projects"
          value={formData.projects}
          onChange={handleChange}
        />

        <button className="primary-btn" onClick={handleSubmit}>
          Save Changes
        </button>
      </div>
    </div>
  );
}
