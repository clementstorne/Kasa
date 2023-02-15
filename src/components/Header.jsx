import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import "../index.scss";

import NavList from "./NavList";

function Header() {
  return (
    <header className="header">
      <Link to={`/`}>
        <img src={logo} alt="Logo de Kasa" className="logo-header" />
      </Link>
      <NavList />
    </header>
  );
}

export default Header;
