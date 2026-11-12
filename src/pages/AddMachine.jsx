import React, { useState } from 'react';
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
      nom: formData.nom.trim(),
      zone: formData.zone.trim(),
      statut: formData.statut,
      productionJournaliere: Number(formData.productionJournaliere),
    };

    setMachines([...machines, newMachine]);

    navigate('/machines');
  };

  return (
    <div>
      <h2>Ajouter une nouvelle machine</h2>

      {errorMsg && (
        <div>
          {errorMsg}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div>
          <label >Nom de la machine :</label>
          <input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            placeholder="Ex: Robot de soudage A1"
          />
        </div>

        <div>
          <label>Zone de production :</label>
          <input
            type="text"
            name="zone"
            value={formData.zone}
            onChange={handleChange}
            placeholder="Ex: Atelier Nord"
          />
        </div>

        <div>
          <label>Statut initial :</label>
          <select
            name="statut"
            value={formData.statut}
            onChange={handleChange}
          >
            <option value="En fonctionnement">En fonctionnement</option>
            <option value="À l'arrêt">À l'arrêt</option>
            <option value="En panne">En panne</option>
          </select>
        </div>

        <div>
          <label>Production journalière (pièces) :</label>
          <input
            type="number"
            name="productionJournaliere"
            min="0"
            value={formData.productionJournaliere}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
        >
          Enregistrer la machine
        </button>
      </form>
    </div>
  );
}

export default AddMachine;