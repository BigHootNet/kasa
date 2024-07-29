import logo from '../assets/logo.svg';
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <NavLink to="/home">
        <img src={logo} alt="Logo Kasa" />
      </NavLink>
      <nav>
        <NavLink to="/home" className={({ isActive }) => (isActive ? 'active' : '')}>
          Accueil
        </NavLink>
        <NavLink to="/aboutus" className={({ isActive }) => (isActive ? 'active' : '')}>
          A <span className="capitalize">P</span>ropos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
