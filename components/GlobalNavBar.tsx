import { NavBarIcon } from "./MenuIcons";

const GlobalNavBar = ({ pages }) => {
  return (
    <nav className="nav">
      <NavBarIcon text="Tools" to={undefined}></NavBarIcon>
    </nav>
  );
};

export default GlobalNavBar;
