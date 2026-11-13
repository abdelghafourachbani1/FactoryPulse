function Dashboard({ machines }) {
  const totalMachines = machines.length;
  const workingMachines = machines.filter((m) => m.statut === 'En fonctionnement').length;
  const brokenMachines = machines.filter((m) => m.statut === 'En panne').length;
  const stoppedMachines = machines.filter((m) => m.statut === "À l'arrêt").length;

  return (
    <div className="dashboard-page">
      <h2>Tableau de bord - FactoryPulse</h2>
      <p>Bienvenue dans l'espace de suivi de production de l'usine de Safi.</p>
      <div> 

        <div>
          <h3>Total Machines</h3>
          <p>{totalMachines}</p>
        </div>

        <div>
          <h3>En fonctionnement</h3>
          <p>{workingMachines}</p>
        </div>

        <div>
          <h3>En panne</h3>
          <p>{brokenMachines}</p>
        </div>

        <div>
          <h3>À l'arrêt</h3>
          <p>{stoppedMachines}</p>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;