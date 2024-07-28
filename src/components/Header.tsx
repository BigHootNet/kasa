import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo Kasa" />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/aboutus">
          A <span className="capitalize">P</span>ropos
        </Link>
      </nav>
    </header>
  );
}

export default Header;