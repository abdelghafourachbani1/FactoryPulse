import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddMachine({ machines, setMachines }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nom: '',
    zone: '',
    statut: 'En fonctionnement',
    productionJournaliere: 0,
  });

  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.nom.trim() || !formData.zone.trim()) {
      setErrorMsg("Le nom et la zone de production sont obligatoires.");
      return;
    }

    if (Number(formData.productionJournaliere) < 0) {
      setErrorMsg("La production journalière doit être supérieure ou égale à zéro.");
      return;
    }

const newMachine = {
  id: Date.now(),
  name: formData.nom.trim(),
  zone: formData.zone.trim(),
  status: formData.statut,
  dailyProduction: Number(formData.productionJournaliere),
};

    setMachines([...machines, newMachine]);

    navigate('/machines');
  };

return (
  <div className="min-h-screen bg-white p-8">

    <div className="max-w-2xl mx-auto">

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Ajouter une nouvelle machine
        </h2>
        <p className="text-gray-500 text-sm mt-2">
          Remplissez les informations de la nouvelle machine.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">

        {errorMsg && (
          <div className="mb-6 p-3 rounded-lg bg-red-50 text-red-600 text-sm border border-red-100">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Nom de la machine
            </label>
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleChange}
              placeholder="Ex: Robot de soudage A1"
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Zone de production
            </label>
            <input
              type="text"
              name="zone"
              value={formData.zone}
              onChange={handleChange}
              placeholder="Ex: Atelier Nord"
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Statut initial
            </label>
            <select
              name="statut"
              value={formData.statut}
              onChange={handleChange}
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none"
            >
              <option value="En fonctionnement">En fonctionnement</option>
              <option value="À l'arrêt">À l'arrêt</option>
              <option value="En panne">En panne</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Production journalière (pièces)
            </label>
            <input
              type="number"
              name="productionJournaliere"
              min="0"
              value={formData.productionJournaliere}
              onChange={handleChange}
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none"
            />
          </div>

          <div className="pt-5 border-t border-gray-100">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Enregistrer la machine
            </button>
          </div>

        </form>
      </div>
    </div>
  </div>
);
}

export default AddMachine;