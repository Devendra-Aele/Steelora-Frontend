"use client";

// import { navRoutes } from "@/constants/navLinks";
import { NAVLINKS } from "@/utils/mapDataToNavbar";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const NavbarDesktop = ({ navRoutes }: { navRoutes: NAVLINKS[] }) => {
  const pathname = usePathname();

  const [categories, setCategories] = useState<any>(null);
  const [hoverLink, setHoverLink] = useState(0);
  const [subCategories, setSubCategories] = useState<any>(null);
  const [subCategoryIndex, setSubCategoryIndex] = useState(0);

  const handleCloseCategories = () => {
    setCategories(null);
    setHoverLink(0);
    setSubCategories(null);
    setSubCategoryIndex(0);
  };

  const handleSubcategoriesClose = () => {
    setSubCategories(null);
    setSubCategoryIndex(0);
  };

  const [hideOnScroll, setHideOnScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 100) {
        // Adjust 100 to your desired scroll threshold
        setHideOnScroll(true);
      } else {
        setHideOnScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      <div className="w-full bg-black">
        <div
          className={`hidden lg:flex py-3  w-[91.66%] mx-auto  text-white justify-between items-center ${
            hideOnScroll ? "lg:hidden " : ""
          }`}
        >
          <div className="flex justify-between items-center gap-8 text-sm">
            <Link
              href={"https://steelora.com/tel:+91-9819891556"}
              target="_blank"
              className="flex justify-between items-center gap-2"
            >
              <Image
                src={"/assets/nav/call.svg"}
                alt="call"
                width={24}
                height={24}
              />
              <p>+91-9819891556</p>
            </Link>
            <Link
              href={"mailto:info@steelora.com"}
              target="_blank"
              className="flex justify-between items-center gap-2"
            >
              <Image
                src={"/assets/nav/mail.svg"}
                alt="call"
                width={24}
                height={24}
              />
              <p>info@steelora.com</p>
            </Link>
            {/* <div className="flex justify-between items-center gap-2">
              <Image
                src={"/assets/nav/time.svg"}
                alt="call"
                width={18}
                height={18}
              />
              <p className="text-gray-500">Mon - Sat 9.30 - 19.30</p>
            </div> */}
          </div>
          <div className="flex justify-between items-center gap-4">
            <Link
              href={{
                pathname: "http://www.facebook.com/Steelora",
                query: { data: "neel" },
              }}
              target="_blank"
            >
              <Image
                alt="facebook-icon"
                width={20}
                height={20}
                className=""
                src={"/assets/nav/facebook.svg"}
              />
            </Link>
            <Link
              href={"http://www.instagram.com/SteeloraSteel"}
              target="_blank"
            >
              <Image
                alt="facebook-icon"
                width={20}
                height={20}
                className=""
                src={"/assets/nav/instagram.svg"}
              />
            </Link>
            <Link
              href={"https://www.linkedin.com/company/steelora/"}
              target="_blank"
            >
              <Image
                alt="facebook-icon"
                width={20}
                height={20}
                className=""
                src={"/assets/nav/linkedin.svg"}
              />
            </Link>
            <Link href={"https://in.pinterest.com/Steelora/"} target="_blank">
              <Image
                alt="facebook-icon"
                width={20}
                height={20}
                className=""
                src={"/assets/nav/pinterest.svg"}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className=" max-[1150px]:hidden w-[91.66%] mx-auto min-[1150px]:flex justify-between items-center py-5">
        <Link href={`/`}>
          <Image
            src={"/assets/navbar/nav-logo-2.png"}
            alt="logo"
            width={223}
            height={36}
            className="w-24 lg:w-44 h-9"
          />
        </Link>

        {/* LINKS LIST */}
        <ul className="flex  items-center gap-1 xl:gap-2 capitalize">
          {navRoutes.map((link) => {
            if (link.route === "/contact-us") {
              return (
                <Link key={link.id} href={`/contact-us`}>
                  <button className="primary-button">Contact Us</button>
                </Link>
              );
            }

            // if (
            //   link.route === "/stainless-steel-pvd-profiles"
            //   // link.route === "/ss-pvd-profiles"
            //   // ||
            //   // link.route === "/mesh" ||
            //   // link.route === "/facade"
            // ) {
            //   return (
            //     <Link
            //       key={link.name}
            //       href={link.route}
            //       className={`hover:text-primary-text ${
            //         pathname.includes(link.route) && link.name !== "Home"
            //           ? "text-primary-text hover:text-primary-text font-medium"
            //           : pathname === "/" && link.name === "Home"
            //           ? "text-primary-text hover:text-primary-text font-medium"
            //           : "text-[#0E0E0E]"
            //       }

            //       `}
            //     >
            //       <li className="p-1 xl:p-2 text-sm">{link.name}</li>
            //     </Link>
            //   );
            // }

            return (
              <div
                onMouseEnter={() => {
                  setCategories(link.categories);
                  setHoverLink(link.id);
                }}
                onMouseLeave={handleCloseCategories}
                className={`hover:text-primary-text ${
                  pathname.includes(link.route) && link.name !== "Home"
                    ? "text-primary-text hover:text-primary-text font-medium"
                    : pathname === "/" && link.name === "Home"
                    ? "text-primary-text hover:text-primary-text font-medium"
                    : "text-[#0E0E0E]"
                }
                  relative 
                  `}
                key={link.id}
              >
                <Link href={link.route} className="">
                  <li className="p-1 xl:p-[10px] text-sm">{link.name}</li>
                </Link>

                {/* CATEGORIES DIV */}
                {hoverLink === link.id && categories?.length >= 1 ? (
                  <div
                    key={link.id}
                    className="font-Montserrat rounded-lg font-normal z-[101] inline-block bg-dark-grey text-white absolute top-full"
                  >
                    <div className="py-2 px-3 relative">
                      {categories?.map((item: any) => {
                        return (
                          <div key={item?.id} className="py-2">
                            <Link
                              onMouseEnter={() => {
                                setSubCategories(item?.subCategories);
                                setSubCategoryIndex(item?.id);
                              }}
                              // onMouseLeave={handleSubcategoriesClose}
                              href={item.route}
                              className={`hover:text-primary-text hover:font-medium whitespace-nowrap text-sm leading-5  ${
                                pathname.includes(item.route)
                                  ? "text-primary-text font-medium"
                                  : ""
                              }`}
                            >
                              {item.name}
                            </Link>

                            {/* SUBCATEGORIES DIV */}
                            {subCategories?.length > 0 &&
                            subCategoryIndex === item?.id &&
                            item.route !==
                              "/railings-manufactures-suppliers-india/stainless-steel-railings" ? (
                              <div
                                onMouseLeave={handleSubcategoriesClose}
                                className="py-2 px-3 rounded-lg inline-block text-white absolute left-full bg-dark-grey"
                              >
                                {subCategories?.map((subCat: any) => {
                                  return (
                                    <Link
                                      key={subCat?.id}
                                      className={`hover:text-primary-text hover:font-medium py-2 block whitespace-nowrap text-sm ${
                                        pathname === subCat.route
                                          ? "text-primary-text font-medium"
                                          : ""
                                      }`}
                                      href={subCat?.route}
                                    >
                                      {subCat.name}
                                    </Link>
                                  );
                                })}
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NavbarDesktop;
