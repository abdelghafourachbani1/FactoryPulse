import { NavLink } from 'react-router-dom';

function Navbar() {
  const linkClass = ({ isActive }) =>
    `rounded-xl px-3.5 py-2 text-sm font-medium transition-colors ${
      isActive
        ? 'bg-slate-900 text-white shadow-sm'
        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
    }`;

  return (
    <nav className="bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div className="text-lg font-bold tracking-tight text-slate-900">
          FacttoryPulse
        </div>
        <div className="flex items-center gap-2">
          <NavLink to="/" end className={linkClass}>
            TAbleau de bord
          </NavLink>
          <NavLink to="/machines" end className={linkClass}>
            Gestion des machines
          </NavLink>
          <NavLink to="/machines/new" className={linkClass}>
            ajouter une machines
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;