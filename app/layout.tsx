import "../styles/globals.css";

import React from "react";
import { FaBars } from "react-icons/fa";

import NavBar from "../components/NavBar";
import { DropdownMenu, NavBarIcon } from "../components/MenuIcons";
import SideBar from "../components/SideBar";

export const metadata = {
    title: "Next.js",
    description: "Generated by Next.js",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <NavBar>
                    <NavBarIcon text="Home" to={"/"}></NavBarIcon>
                    <NavBarIcon text="Tools" to={undefined}></NavBarIcon>
                    <NavBarIcon icon={<FaBars />} to={undefined}>
                        {
                            // dropdown state here
                        }
                        <DropdownMenu />
                    </NavBarIcon>
                </NavBar>
                <SideBar />
                {children}
            </body>
        </html>
    );
}
