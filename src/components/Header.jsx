import logo from "../assets/logo.png";
import "../index.scss";

import NavList from "./NavList";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo de Kasa" className="logo" />
      <NavList />
      {/* <nav className="navbar">
        <NavLink to={`/`} className="link">
          Accueil
        </NavLink>
        <NavLink to="/about" className="link">
          À propos
        </NavLink>
      </nav> */}
    </header>
  );
}

export default Header;
