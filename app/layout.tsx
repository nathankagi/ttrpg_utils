import '../styles/globals.css'
import NavBar from '../components/NavBar'
import { NavBarIcon } from '../components/MenuIcons'
import SideBar from '../components/SideBar'

import { FaBars } from 'react-icons/fa'

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavBar>
          <NavBarIcon text="Home" to={'/'}></NavBarIcon>
          <NavBarIcon text="Tools" to={undefined}></NavBarIcon>
          <NavBarIcon icon={<FaBars />} to={undefined}>
            {
              // dropdown state here
            }
          </NavBarIcon>
        </NavBar>
        <SideBar />
        {children}</body>
    </html>
  )
}
