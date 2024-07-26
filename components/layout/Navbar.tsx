"use client";

import React, { useEffect, useState } from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

import axios from "axios";
import { mapDataToNavbar } from "@/utils/mapDataToNavbar";

const Navbar = () => {
  const [routes, setRoutes] = useState<any>([]);

  useEffect(() => {
    const fetchNavRoutes = async () => {
      const res = await axios.get(
        "https://cms.steelora.com/api/products?populate[0]=imageUrl&populate[1]=product_types.imagesUrl&populate[2]=product_types.catogeries.items"
      );
      const mappedData = mapDataToNavbar(res.data.data);

      console.log(mappedData);

      const desiredOrder = [
        "Railings",
        "SS PVD Sheets",
        "SS PVD Profiles",
        "Mesh",
        "Facade",
      ];

      const sortedMappedData = desiredOrder
        .map((desiredCategory) => {
          const foundCategory = mappedData.find(
            (item) => item?.name === desiredCategory
          );
          return foundCategory || null; // Return null if the category is not found
        })
        .filter(Boolean);

      setRoutes([
        { id: 100, name: "Home", route: "/" },
        { id: 101, name: "About Us", route: "/about-us" },
        ...sortedMappedData,
        { id: 102, name: "Projects", route: "/projects" },
        { id: 104, name: "Request Samples", route: "/request-samples" },
        { id: 105, name: "Contact Us", route: "/contact-us" },
      ]);
    };

    fetchNavRoutes();
  }, []);

  // console.log(routes);

  return (
    <nav className="  w-full fixed top-0 left-0 right-0 z-[100]  bg-white shadow-lg">
      <NavbarDesktop navRoutes={routes} />
      <NavbarMobile navRoutes={routes} />
    </nav>
  );
};

export default Navbar;
