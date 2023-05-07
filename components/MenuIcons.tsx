"use client";

import Link from "next/link";
import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { FaArrowAltCircleLeft } from "react-icons/fa";

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
    const [open, setOpen] = useState(false);
    return (
        <>
            <Link
                className="navbar-icon font-sans"
                href={props.to ? props.to : ""}
                onClick={() => setOpen(!open)}
            >
                {props.text ? props.text : props.icon}
            </Link>
            {open && props.children}
        </>
    );
};

export const DropdownMenu = () => {
    const nodeRef = React.useRef(null)
    const [activeMenu, setActiveMenu] = useState('main');

    function DropdownItem(props) {
        return (
            <Link href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                {props.children}
            </Link>
        );
    }
    return <div className="dropdown">
        <CSSTransition
            in={activeMenu === "main"}
            unmountOnExit
            timeout={500}
            classNames="menu-primary"
            nodeRef={nodeRef}
        >
            <div className="menu">
                <DropdownItem goToMenu="user">User</DropdownItem>
                <DropdownItem goToMenu="settings">Settings</DropdownItem>
                <DropdownItem>Test</DropdownItem>
            </div>
        </CSSTransition >

        <CSSTransition
            in={activeMenu === "user"}
            unmountOnExit
            timeout={500}
            classNames="menu-secondary"
            nodeRef={nodeRef}
        >
            <div className="menu">
                <DropdownItem goToMenu="main"><FaArrowAltCircleLeft /></DropdownItem>
                <DropdownItem>Test</DropdownItem>
                <DropdownItem>Test</DropdownItem>
                <DropdownItem>Test</DropdownItem>
            </div>
        </CSSTransition>

        <CSSTransition
            in={activeMenu === "settings"}
            unmountOnExit
            timeout={500}
            classNames="menu-secondary"
            nodeRef={nodeRef}
        >
            <div className="menu">
                <DropdownItem goToMenu="main"><FaArrowAltCircleLeft /></DropdownItem>
                <DropdownItem>User</DropdownItem>
                <DropdownItem>Application Settings</DropdownItem>
                <DropdownItem>Privacy</DropdownItem>
            </div>
        </CSSTransition>
    </div >;
};
