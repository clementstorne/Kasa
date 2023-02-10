import logo from "../assets/logo-white.png";
import "../index.scss";

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo de Kasa" className="logo-footer" />
      <p className="credits">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
