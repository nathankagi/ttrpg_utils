import { FaGithub, FaTwitter, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { SideBarIcon } from "./MenuIcons";

const GlobalSideBar = () => {
  return (
    <>
      <div className="sidebar">
        <SideBarIcon
          icon={<FaGithub />}
          text="Github"
          link="https://github.com/nathankagi/ttrpg_utils"
        ></SideBarIcon>
        <SideBarIcon
          icon={<FaTwitter />}
          text="Twitter"
          link="https://twitter.com/nathankagi"
        ></SideBarIcon>
        <SideBarIcon
          icon={<FaEnvelope />}
          link="x@y.com"
          text="x@y.com"
        ></SideBarIcon>
      </div>
    </>
  );
};

export default GlobalSideBar;
