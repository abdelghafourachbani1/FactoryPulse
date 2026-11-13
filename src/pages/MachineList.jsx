import { useState } from 'react';

function MachineList({ machines, setMachines }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('Tous');

  const handleDelete = (id) => {
    if (window.confirm("Voulez-vous vraiment supprimer cette machine ?")) {
      setMachines(machines.filter((m) => m.id !== id));
    }
  };

  const handleStatusChange = (id, newStatus) => {
    setMachines(
      machines.map((m) =>
        m.id === id ? { ...m, status: newStatus } : m 
      )
    );
  };

  const handleResetFilters = () => {
    setSearchTerm('');
    setStatusFilter('Tous');
  };

  const safeMachines = machines

  const filteredMachines = safeMachines.filter((m) => {
    const matchesName = m.name.toLowerCase().includes(searchTerm.toLowerCase());
const matchesStatus = statusFilter === 'Tous' || m.status === statusFilter;    return matchesName && matchesStatus;
  });

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">
        Gestion des machines
      </h2>

      <div className="flex flex-wrap gap-3 mb-6">
        <input
          type="text"
          placeholder="Rechercher par nom..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border rounded-lg px-3 py-2 bg-white"
        >
          <option value="Tous">Tous les statuts</option>
          <option value="En fonctionnement">En fonctionnement</option>
          <option value="À l'arrêt">À l'arrêt</option>
          <option value="En panne">En panne</option>
        </select>

        <button
          onClick={handleResetFilters}
          className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
        >
          Réinitialiser
        </button>
      </div>

      {filteredMachines.length === 0 ? (
        <p className="text-gray-500 py-6">
          Aucune machine ne correspond aux critères de recherche.
        </p>
      ) : (
        <div className="overflow-x-auto border rounded-lg">
          <table className="w-full text-left">
            <thead className="bg-gray-100">
              <tr>
                {['ID', 'Nom', 'Zone', 'Statut', 'Production', 'Actions'].map(
                  (heading) => (
                    <th key={heading} className="px-4 py-3 font-medium text-gray-600">
                      {heading}
                    </th>
                  )
                )}
              </tr>
            </thead>

            <tbody>
              {filteredMachines.map((m) => (
                <tr key={m.id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-3">{m.id}</td>
                  <td className="px-4 py-3 font-medium">{m.name}</td>
                  <td className="px-4 py-3">{m.zone}</td>

                  <td className="px-4 py-3">
                    <select
                      value={m.status}
                      onChange={(e) => handleStatusChange(m.id, e.target.value)}
                      className="border rounded-md px-2 py-1 bg-white"
                    >
                      <option value="En fonctionnement">En fonctionnement</option>
                      <option value="À l'arrêt">À l'arrêt</option>
                      <option value="En panne">En panne</option>
                    </select>
                  </td>

                  <td className="px-4 py-3">
                    {m.dailyProduction} pièces
                  </td>

                  <td className="px-4 py-3">
                    <button
                      onClick={() => handleDelete(m.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default MachineList;