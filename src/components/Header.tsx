import React from 'react'

import { logo } from '../../public/';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  User,
  Image
} from "@nextui-org/react";

import {
  NavLink
} from 'react-router-dom'



const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { navlink: "ART", path: "/art" },
    { navlink: "SCIENCE", path: "/science" },
    { navlink: "TECHNOLOGY", path: "/technology" },
    { navlink: "CINEMA", path: "/cinema" },
    { navlink: "DESIGN", path: "/design" },
    { navlink: "FOOD", path: "/food" },
    { navlink: "BLOG", path: "/post" },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
        />
        <NavbarBrand>
          <NavLink to="/">
            <Image
              isBlurred
              width={screen.width < 340 ? 10 : 40  }
              src={logo}
              alt="NextUI Album Cover"
              className="m-5"
            />
          </NavLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-4" justify="center">
        <NavbarItem>
          <NavLink color="foreground" to="/art/?cat=art" className={({ isActive }) => (isActive ? 'text-base font-Kanit-Bold text-sulu-500 underline underline-offset-4 decoration-2 decoration-sulu-500 hover:text-sulu-600' : 'text-base font-Kanit-Light hover:text-sulu-500')}>
            ART
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink color="foreground" to="/science/?cat=science" className={({ isActive }) => (isActive ? 'text-base font-Kanit-Bold text-sulu-500 underline underline-offset-4 decoration-2 decoration-sulu-500 hover:text-sulu-600' : 'text-base font-Kanit-Light hover:text-sulu-500')}>
            SCIENCE
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink color="foreground" to="/technology/?cat=technology" className={({ isActive }) => (isActive ? 'text-base font-Kanit-Bold text-sulu-500 underline underline-offset-4 decoration-2 decoration-sulu-500 hover:text-sulu-600' : 'text-base font-Kanit-Light hover:text-sulu-500')}>
            TECHNOLOGY
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink color="foreground" to="/cinema/?cat=cinema" className={({ isActive }) => (isActive ? 'text-base font-Kanit-Bold text-sulu-500 underline underline-offset-4 decoration-2 decoration-sulu-500 hover:text-sulu-600' : 'text-base font-Kanit-Light hover:text-sulu-500')}>
            CINEMA
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink color="foreground" to="/design/?cat=design" className={({ isActive }) => (isActive ? 'text-base font-Kanit-Bold text-sulu-500 underline underline-offset-4 decoration-2 decoration-sulu-500 hover:text-sulu-600' : 'text-base font-Kanit-Light hover:text-sulu-500')}>
            DESIGN
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink color="foreground" to="/food/?cat=food" className={({ isActive }) => (isActive ? 'text-base font-Kanit-Bold text-sulu-500 underline underline-offset-4 decoration-2 decoration-sulu-500 hover:text-sulu-600' : 'text-base font-Kanit-Light hover:text-sulu-500')}>
            FOOD
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink color="foreground" to="/post" className={({ isActive }) => (isActive ? 'text-base font-Kanit-Bold text-sulu-500 underline underline-offset-4 decoration-2 decoration-sulu-500 hover:text-sulu-600' : 'text-base font-Kanit-Light hover:text-sulu-500')}>
            BLOG
          </NavLink>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        {/* <NavbarItem className="hidden lg:flex text-base font-Kanit-Light hover:text-sulu-500">
          <NavLink to="/login">LOGIN</NavLink>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color='success' href="/register" variant="shadow" radius='sm' size='sm' className='bg-sulu-500 text-white text-base font-Kanit-Light'>
            SIGN UP
          </Button>
        </NavbarItem> */}

        <Dropdown placement="bottom-start">
          <DropdownTrigger>
            <User
              as="button"
              avatarProps={{
                size:'sm',
                isBordered: true,
                color: 'success',
                src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
              }}
              className="transition-transform"
              classNames={{
                name:'hidden md:flex font-Kanit-Light text-[12px]  lg:text-base',
                description:'hidden md:flex font-Kanit-Light text-[10px] lg:text-sm'
              }}
              description="@CristoferDevs"
              name="Cristofer Angeles"

            />
          </DropdownTrigger>
          <DropdownMenu aria-label="User Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-bold">Signed in as</p>
              <p className="font-bold">@CristoferDevs</p>
            </DropdownItem>
            <DropdownItem key="settings">
              My Settings
            </DropdownItem>
            <DropdownItem key="team_settings">
              Team Settings
            </DropdownItem>
            <DropdownItem key="analytics">
              Analytics
            </DropdownItem>
            <DropdownItem key="system">
              System
            </DropdownItem>
            <DropdownItem key="configurations">
              Configurations
            </DropdownItem>
            <DropdownItem key="help_and_feedback">
              Help & Feedback
            </DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <NavLink
              color="foreground"
              to={item.path}
              className={({ isActive }) => (
                isActive ? 'text-base font-Kanit-Bold text-sulu-500 underline underline-offset-4 decoration-2 decoration-sulu-500 hover:text-sulu-600' : 'text-base font-Kanit-Light hover:text-sulu-500'
              )}
            >
              {item.navlink}
            </NavLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

export default Header