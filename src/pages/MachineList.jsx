import { useState } from 'react';

function MachineList({ machines, setMachines }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('Tous');

  const handleDelete = (id) => {
    if (window.confirm("do you want to delete it ")) {
      setMachines(machines.filter((m) => m.id !== id));
    }
  };

  const handleStatusChange = (id, newStatus) => {
    setMachines(
      machines.map((m) =>
        m.id === id ? { ...m, statut: newStatus } : m
      )
    );
  };

  const handleResetFilters = () => {
    setSearchTerm('');
    setStatusFilter('Tous');
  };

  const filteredMachines = machines.filter((m) => {
    const matchesName = m.nom.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'Tous' || m.statut === statusFilter;
    return matchesName && matchesStatus;
  });

  return (
    <div >
      <h2>Gestion des machines</h2>

      <div>
        <input type="text" placeholder="Rechercher par nom..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="Tous">Tous les statuts</option>
          <option value="En fonctionnement">En fonctionnement</option>
          <option value="À l'arrêt">À l'arrêt</option>
          <option value="En panne">En panne</option>
        </select>

        <button onClick={handleResetFilters}>
          Réinitialiser
        </button>
      </div>

      {filteredMachines.length === 0 ? (
        <div>
          <p>Aucune machine ne correspond aux critères de recherche.</p>
        </div>) : 
        (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Zone</th>
              <th>Statut</th>
              <th>Production</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredMachines.map((m) => (
              <tr key={m.id} >
                <td>{m.id}</td>
                <td>{m.nom}</td>
                <td>{m.zone}</td>
                <td>
                  <select value={m.statut}onChange={(e) => handleStatusChange(m.id, e.target.value)}>
                    <option value="En fonctionnement">En fonctionnement</option>
                    <option value="À l'arrêt">À l'arrêt</option>
                    <option value="En panne">En panne</option>
                  </select>
                </td>
                <td>{m.productionJournaliere} pièces</td>
                <td>
                  <button onClick={() => handleDelete(m.id)}>Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default MachineList;