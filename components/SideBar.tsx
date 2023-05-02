import { FaGithub, FaTwitter, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { SideBarIcon } from "./MenuIcons";

const SideBar = () => {
  return (
    <>
      <div className="sidebar">
        <SideBarIcon
          icon={<FaGithub />}
          text="Github"
          link="https://github.com/nathankagi"
        ></SideBarIcon>
        <SideBarIcon
          icon={<FaLinkedinIn />}
          text="LinkedIn"
          link="https://www.linkedin.com/in/nathankagi/"
        ></SideBarIcon>
        <SideBarIcon
          icon={<FaTwitter />}
          text="Twitter"
          link="https://twitter.com/nathankagi"
        ></SideBarIcon>
        <SideBarIcon
          icon={<FaEnvelope />}
          link="npkagi@outlook.com"
          text="npkagi@outlook.com"
        ></SideBarIcon>
      </div>
    </>
  );
};

export default SideBar;
