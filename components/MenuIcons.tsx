"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";

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

export const DropdownMenu = (props) => {
    const nodeRef = React.useRef(null)
    const [activeMenu, setActiveMenu] = useState('main');

    const DropdownItem = (props) => {
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
            timeout={1}
            classNames="menu-primary"
            nodeRef={nodeRef}
        >
            <div ref={nodeRef}>
                <div className="menu">
                    <DropdownItem goToMenu="user">User</DropdownItem>
                    <DropdownItem goToMenu="settings">Settings</DropdownItem>
                    <DropdownItem>Test</DropdownItem>
                </div>
            </div>
        </CSSTransition >

        <CSSTransition
            in={activeMenu === "user"}
            unmountOnExit
            timeout={1}
            classNames="menu-secondary"
            nodeRef={nodeRef}
        >
            <div ref={nodeRef}>
                <div className="menu">
                    <DropdownItem goToMenu="main"><FaArrowAltCircleLeft /></DropdownItem>
                    <DropdownItem>Test</DropdownItem>
                    <DropdownItem>Test</DropdownItem>
                    <DropdownItem>Test</DropdownItem>
                </div>
            </div>
        </CSSTransition>

        <CSSTransition
            in={activeMenu === "settings"}
            unmountOnExit
            timeout={1}
            classNames="menu-secondary"
            nodeRef={nodeRef}
        >
            <div ref={nodeRef}>
                <div className="menu">
                    <DropdownItem goToMenu="main"><FaArrowAltCircleLeft /></DropdownItem>
                    <DropdownItem>User</DropdownItem>
                    <DropdownItem>Application Settings</DropdownItem>
                    <DropdownItem>Privacy</DropdownItem>
                </div>
            </div>
        </CSSTransition>
    </div >;
};