const NavBar = (props) => {
  return (
    <nav className="navbar">
      <div className="navbar-nav">{props.children}</div>
    </nav>
  );
};

export default NavBar;
