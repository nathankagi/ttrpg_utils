import Link from 'next/link';

export const SideBarIcon = ({
  icon,
  text = "",
  link = "https://www.google.com/",
}) => {
  return (
    <a href={link}>
      <div className="sidebar-icon group">
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
      </div>
    </a>
  );
};

export const NavBarIcon = ({ ...props }) => {
  return (
    <>
      <Link className="navbar-icon font-sans" href={props.to ? props.to : ''}>
        {props.text ? props.text : props.icon}
      </Link>
    </>
  );
};