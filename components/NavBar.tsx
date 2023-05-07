import { DropdownMenu, NavBarIcon } from "./MenuIcons";
import { FaBars } from "react-icons/fa";

const NavBar = (props) => {
    return (
        <nav className="navbar">
            <div className="navbar-nav">
                <NavBarIcon text="Home" to={"/"}></NavBarIcon>
                <NavBarIcon text="Tools" to={undefined}></NavBarIcon>
                <NavBarIcon icon={<FaBars />} to={undefined}>
                    {
                        // dropdown state here
                    }
                    <DropdownMenu />
                </NavBarIcon></div>
        </nav>
    );
};

export default NavBar;
