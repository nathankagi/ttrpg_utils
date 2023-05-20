import { SettingsDropdown, NavBarIcon, ToolsDropdown } from "./MenuIcons";
import { FaBars, FaHome, FaTools } from "react-icons/fa";

const NavBar = (props) => {
    return (
        <nav className="navbar">
            <div className="navbar-nav">
                <NavBarIcon icon={<FaHome />} to={"/"}></NavBarIcon>
                <NavBarIcon icon={<FaTools />} to={undefined}>
                    <ToolsDropdown />
                </NavBarIcon>
                <NavBarIcon icon={<FaBars />} to={undefined}>
                    <SettingsDropdown />
                </NavBarIcon></div>
        </nav>
    );
};

export default NavBar;
