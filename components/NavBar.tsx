import Menu from "./Menu";
import { NavBarIcon } from "./MenuIcons";

const NavBar = ({ pages }) => {
  return (
    <nav className="nav">
      <NavBarIcon text="Tools" to={undefined}></NavBarIcon>
      <Menu />
    </nav>
  );
};

export default NavBar;
