"use client";

// import { navRoutes } from "@/constants/navLinks";
import { NAVLINKS } from "@/utils/mapDataToNavbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaX } from "react-icons/fa6";

const NavbarDrawer = ({
  isOpen,
  closeModal,
  navRoutes,
}: {
  isOpen: boolean;
  closeModal: () => void;
  navRoutes: NAVLINKS[];
}) => {
  const pathname = usePathname();

  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  const handleCurrentCategory = (index: number) => {
    setCurrentCategoryIndex(currentCategoryIndex === 0 ? index : 0);
  };

  return (
    <div
      className={`block min-[1150px]:hidden h-screen p-8 fixed inset-0 z-10 bg-white text-black transition-all duration-300 overflow-y-auto ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-end mb-[6px]">
        <button onClick={closeModal}>
          <FaX />
        </button>
      </div>

      <ul className="flex flex-col gap-5 capitalize">
        {navRoutes?.map((link, index) => {
          if (link.route === "/contact-us") {
            return (
              <li onClick={closeModal} key={index}>
                <Link href={`/contact-us`}>
                  <button className="primary-button">Contact Us</button>
                </Link>
              </li>
            );
          }

          if (
            link.route === "/stainless-steel-pvd-profiles"
            // ||
            // link.route === "/mesh" ||
            // link.route === "/facade"
          ) {
            return (
              <li onClick={closeModal} key={index}>
                <Link
                  onClick={closeModal}
                  className={
                    pathname.includes(link.route) && link.name !== "Home"
                      ? "text-primary-text hover:text-primary-text font-medium"
                      : pathname === "/" && link.name === "Home"
                      ? "text-primary-text font-medium hover:text-primary-text"
                      : "text-[#0e0e0e]"
                    // : "text-white text-opacity-50"
                  }
                  href={link.route}
                >
                  <p className="p-1 xl:p-2 text-sm">{link.name}</p>
                </Link>
              </li>
            );
          }

          if (link?.categories?.length >= 1) {
            return (
              <li
                className={
                  pathname.includes(link.route)
                    ? "text-primary-text"
                    : "text-[#0e0e0e]"
                }
                key={link.id}
                onClick={() => handleCurrentCategory(index)}
              >
                <div className="p-1 xl:p-2 text-sm">
                  <span>{link.name}</span>

                  {currentCategoryIndex === index ? (
                    <div className=" mt-3 ml-3 flex flex-col w-full gap-3">
                      {link?.categories?.map((category) => {
                        return (
                          <Link
                            onClick={closeModal}
                            className={`${
                              pathname.includes(category.route)
                                ? "text-primary-text"
                                : "text-[#0e0e0e]"
                            }`}
                            key={category.id}
                            href={category.route}
                          >
                            {category.name}
                          </Link>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              </li>
            );
          }

          return (
            <li key={link.id}>
              <Link
                onClick={closeModal}
                className={
                  pathname.includes(link.route) && link.name !== "Home"
                    ? "text-primary-text hover:text-primary-text"
                    : pathname === "/" && link.name === "Home"
                    ? "text-primary-text hover:text-primary-text"
                    : "text-[#0e0e0e]"
                  // : "text-white text-opacity-50"
                }
                href={link.route}
              >
                <p className="p-1 xl:p-2 text-sm">{link.name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavbarDrawer;
