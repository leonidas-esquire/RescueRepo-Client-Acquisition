import React, { useState, useEffect } from 'react';
import './Dashboard.scss';
import ClientModal from './ClientModal';
import NewClientModal from './NewClientModal';
import SearchBar from './SearchBar';

interface Client {
  name: string;
  status: string;
  projects: number;
}

export default function Dashboard() {
  const [clients, setClients] = useState<Client[]>([]);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [showNewClientModal, setShowNewClientModal] = useState(false);
  const [deletingClient, setDeletingClient] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('rescuerepo_clients');
    if (saved) {
      setClients(JSON.parse(saved));
    } else {
      setClients([
        { name: 'Acme Corp', status: 'Active', projects: 12 },
        { name: 'Beta Innovations', status: 'Prospect', projects: 4 },
        { name: 'CyberWorks', status: 'Pending', projects: 8 },
      ]);
    }
  }, []);

  useEffect(() => {
    if (clients.length > 0) {
      localStorage.setItem('rescuerepo_clients', JSON.stringify(clients));
    }
  }, [clients]);

  const handleSave = (updatedClient: Client) => {
    setClients(prev =>
      prev.map(c => (c.name === updatedClient.name ? updatedClient : c))
    );
  };

  const handleAddClient = (newClient: Client) => {
    setClients(prev => [...prev, newClient]);
  };

  const handleDeleteClient = (clientName: string) => {
    if (!window.confirm(`Are you sure you want to remove "${clientName}"?`)) return;
    setDeletingClient(clientName);
    setTimeout(() => {
      setClients(prev => prev.filter(c => c.name !== clientName));
      setDeletingClient(null);
    }, 400);
  };

  const filteredClients = clients.filter(client => {
    const matchesName = client.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter ? client.status === statusFilter : true;
    return matchesName && matchesStatus;
  });

  return (
    <section className="dashboard">
      <h2>Client Overview</h2>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />

      <div className="stats">
        <div className="stat-card"><h3>Total Clients</h3><p>{clients.length}</p></div>
        <div className="stat-card"><h3>Active Projects</h3><p>{clients.reduce((a,b)=>a+b.projects,0)}</p></div>
        <div className="stat-card"><h3>Pending Leads</h3><p>{clients.filter(c=>c.status==='Pending').length}</p></div>
      </div>

      <div className="client-grid">
        {filteredClients.map((client, i) => (
          <div key={i} className={`client-card ${deletingClient === client.name ? 'fade-out' : ''}`}>
            <h4>{client.name}</h4>
            <p>Status: {client.status}</p>
            <p>Projects: {client.projects}</p>
            <div className="card-actions">
              <button className="action-btn" onClick={() => setSelectedClient(client)}>View</button>
              <button className="delete-btn" onClick={() => handleDeleteClient(client.name)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      <button className="add-client-btn" onClick={() => setShowNewClientModal(true)}>＋ Add Client</button>

      <ClientModal client={selectedClient} onSave={handleSave} onClose={() => setSelectedClient(null)} />
      {showNewClientModal && (
        <NewClientModal onSave={handleAddClient} onClose={() => setShowNewClientModal(false)} />
      )}
    </section>
  );
}
