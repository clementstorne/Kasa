import { NavLink } from "react-router-dom";

function NavList() {
  return (
    <nav className="navbar">
      <ul className="links-list">
        <li>
          <NavLink
            to={`/`}
            className={({ isActive }) =>
              isActive ? "link link-active" : "link"
            }
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "link link-active" : "link"
            }
          >
            À propos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavList;
