import { useState , useEffect} from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Dashboard from './pages/Dashboard.jsx';
import MachineList from './pages/MachineList.jsx';
import AddMachine from './pages/AddMachine.jsx';


function App() {
  const [machines , setMachines] = useState([]);
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState(null);

useEffect(() => {
    fetch('/machines.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('fetch not hapend');
        }
        return response.json();
      })
      .then((data) => {
        setMachines(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
        <h2>Chargement de FactoryPulse...</h2>
    );
  }

  if (error) {
    return (
      <div>
        <h2>Erreur de chargement</h2>
        <p>{error}</p>
      </div>
    );
  }
  return (
    <>
      <BrowserRouter>
        <Navbar/>
      <div className='maincontainer'>
        <Routes>
          <Route path="/" element={<Dashboard machines={machines} />} />
          <Route path="/machines" element={<MachineList machines={machines} setMachines={setMachines} />} />
          <Route path="/machines/new" element={<AddMachine machines={machines} setMachines={setMachines} />} />
        </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
