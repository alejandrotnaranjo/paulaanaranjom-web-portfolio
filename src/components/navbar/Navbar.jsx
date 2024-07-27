import "../../styles/navbar.css";
import NavbarItem from "./NavbarItem";

function Navbar() {
  return (
    <nav className="navbar-container">
      <ul className="navbar-list-container">
        <NavbarItem title="Inicio" reference="#home" />
        <NavbarItem title="Sobre mí" reference="#about" />
        <NavbarItem title="Contacto" reference="#contact" />
      </ul>
    </nav>
  );
}

export default Navbar;
