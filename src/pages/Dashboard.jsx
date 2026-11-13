function Dashboard({ machines }) {
  const totalMachines = machines.length;
  const workingMachines = machines.filter((m) => m.status === 'En fonctionnement').length;
  const brokenMachines = machines.filter((m) => m.status === 'En panne').length;
  const stoppedMachines = machines.filter((m) => m.status === "À l'arrêt").length;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-2">
        Tableau de bord - FactoryPulse
      </h2>

      <p className="text-gray-500 mb-8">
        Bienvenue dans l'espace de suivi de production de l'usine de Safi.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        <div className="border rounded-lg p-5">
          <h3 className="text-sm text-gray-500">Total Machines</h3>
          <p className="text-3xl font-semibold mt-2">{totalMachines}</p>
        </div>

        <div className="border rounded-lg p-5">
          <h3 className="text-sm text-gray-500">En fonctionnement</h3>
          <p className="text-3xl font-semibold text-green-600 mt-2">
            {workingMachines}
          </p>
        </div>

        <div className="border rounded-lg p-5">
          <h3 className="text-sm text-gray-500">En panne</h3>
          <p className="text-3xl font-semibold text-red-600 mt-2">
            {brokenMachines}
          </p>
        </div>

        <div className="border rounded-lg p-5">
          <h3 className="text-sm text-gray-500">À l'arrêt</h3>
          <p className="text-3xl font-semibold text-orange-500 mt-2">
            {stoppedMachines}
          </p>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;