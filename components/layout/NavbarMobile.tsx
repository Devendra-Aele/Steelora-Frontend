"use client";

import Image from "next/image";
import React, { useState } from "react";
import NavbarDrawer from "./NavbarDrawer";
import Link from "next/link";
import { NAVLINKS } from "@/utils/mapDataToNavbar";

const NavbarMobile = ({ navRoutes }: { navRoutes: NAVLINKS[] }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenNav = () => {
    setIsOpen(true);
  };

  const handleCloseNav = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="min-[1150px]:hidden w-[91.66%] mx-auto flex justify-between items-center py-3">
        <Link href={`/`}>
          <Image
            src={"/assets/navbar/nav-logo1.svg"}
            alt="logo"
            width={190}
            height={36}
            className="w-52 h-10"
          />
        </Link>
        <button onClick={handleOpenNav}>
          <Image
            src={"/assets/icons/hamburger.svg"}
            alt="logo"
            width={24}
            height={24}
          />
        </button>
        <NavbarDrawer
          navRoutes={navRoutes}
          isOpen={isOpen}
          closeModal={handleCloseNav}
        />
      </div>
    </div>
  );
};

export default NavbarMobile;
