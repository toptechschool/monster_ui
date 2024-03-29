import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Switch,
} from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";
import Image from "next/image";
import ChatBot from "../../public/chatBot.png";
import { ChevronRight } from "lucide-react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    {
      id: 1,
      name: "Home",
      href: "/",
    },
    {
      id: 2,
      name: "Dashboard",
      href: "/home",
    },
    {
      id: 3,
      name: "Register",
      href: "/register",
    },
    {
      id: 4,
      name: "Home",
      href: "/home",
    },
    {
      id: 5,
      name: "Home",
      href: "/home",
    },
    {
      id: 6,
      name: "Home",
      href: "/home",
    },
    {
      id: 7,
      name: "Log Out",
      href: "/home",
    },
  ];
  return (
    <Navbar
      height="5rem"
      position="sticky"
      isBordered
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      className="flex"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="flex flex-1 items-center">
          <Image src={ChatBot} width={50} alt="Icon of Chat Monster" />
          <h1 className="font-bold text-inherit">Chat Monster</h1>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex flex-1 items-center justify-center gap-10 text-sm font-semibold leading-6 lg:flex"
        justify="center"
      >
        <NavbarItem>
          <Link className="text-sm" color="foreground" href="#">
            Affiliates
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-sm" href="#" color="foreground">
            Pricing
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-sm" color="foreground" href="#">
            Resources
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent
        justify="end"
        className="hidden sm:flex flex-1 items-center justify-center gap-2 text-sm font-semibold leading-6 text-gray-900 lg:flex"
      >
        <NavbarItem>
          <Switch
            size="md"
            color="primary"
            startContent={<SunIcon />}
            endContent={<MoonIcon />}
          ></Switch>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link href="/register" color="primary">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="/register"
            className="ml-2 rounded-xl px-4 py-2  text-sm font-semibold  leading-7 shadow-sm"
          >
            Register <ChevronRight size={15} />
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, id) => (
          <NavbarMenuItem key={`${item}-${id}`}>
            <Link
              color={
                id === 2
                  ? "primary"
                  : id === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full ml-5"
              href={id.href}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
