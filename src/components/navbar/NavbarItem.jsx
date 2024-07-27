function NavbarItem({ title, reference }) {
  return (
    <li id="navbar-list-item">
      <a href={reference}>{title}</a>
    </li>
  );
}

export default NavbarItem;
