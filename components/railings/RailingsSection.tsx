import { projectAssets } from "@/public/assets/projects";
import Image from "next/image";
import React from "react";
import FeaturesSection from "../reusables/features/FeaturesSection";
import { featuresData } from "@/constants/featuresData";
import Link from "next/link";

const RailingsSection = () => {
  const aluminiumRailings = [
    {
      feature: "Concealed System",
      desc: "Sleek, modern, with hidden fasteners.",
    },
    {
      feature: "Handrail",
      desc: "Supports safety, in various styles.",
    },
    {
      feature: "Side Mounting",
      desc: "Space-efficient for limited areas.",
    },
    {
      feature: "Top Mounting System",
      desc: "Easy installation, contemporary look.",
    },
    {
      feature: "Top Vertical Balustered",
      desc: "Classic style, with vertical balusters.",
    },
    {
      feature: "Wall Mounting System",
      desc: "Attaches to walls for stability.",
    },
  ];

  return (
    <div>
      <section>
        {/* HEADING START */}
        <div className="bg-section-heading  py-10 lg:py-14">
          <h1 className="section-heading mb-2">Railings</h1>
          <p className="para !text-center w-[96.102%]  md:w-[88%] lg:w-[70%] xl:w-[60%] mx-auto">
            Railings play a crucial role in residential and commercial projects,
            offering safety, support, and visual appeal to staircases,
            balconies, and decks. With the backing of the esteemed Sunrise
            Group, Steelora has earned a reputation as a trusted name across
            India. As the nation's largest railing company, we prioritize
            top-notch quality and durability in every piece we offer. When
            selecting the ideal railing material, stainless steel and aluminium
            emerge as popular choices due to their reliability and versatility.
          </p>
        </div>
        {/* HEADING END */}

        <div className="section-y-padding section-x-padding">
          {/* 1ST SECTION */}
          <div className="flex flex-col lg:flex-row  gap-6 lg:gap-16 xl:gap-28 items-center mb-14">
            <div className="flex flex-col gap-3 order-2 lg:order-1">
              <h2 className="sub_heading2">Aluminium Railings</h2>
              <p className="para">
                Aluminium railings are lightweight yet durable, ideal for
                various projects. They include:
              </p>

              <ul className="list-disc text-para-text ml-5">
                {aluminiumRailings.map((item) => {
                  return (
                    <li
                      key={item.feature}
                      className="text-sm md:text-base mb-3"
                    >
                      <span className="font-medium">{item.feature}: </span>
                      <span className="font-light">{item.desc}</span>
                    </li>
                  );
                })}
              </ul>

              <div className="inline-block">
                <Link
                  href={
                    "/railings-manufactures-suppliers-india/aluminium-railings"
                  }
                  className="primary-button"
                >
                  Explore Products
                </Link>
              </div>
            </div>
            <div className="h-[22.37rem] w-[22.37rem] lg:w-[30rem] lg:h-[30rem] order-1 lg:order-2">
              <Image
                src={projectAssets.railing}
                alt="Aluminium Railings"
                className="w-full h-full object-cover border border-white"
              />
            </div>
          </div>
          {/* 1ST SECTION END */}

          {/* 2ND SECTION */}
          <div className="flex flex-col lg:flex-row  gap-6 lg:gap-16 xl:gap-28 items-center ">
            <div className="h-[22.37rem] w-[22.37rem] lg:w-[30rem] lg:h-[30rem] flex-shrink-0">
              <Image
                src={projectAssets.alu}
                alt="Aluminium Railings"
                className="w-full h-full object-cover border border-white"
              />
            </div>

            <div>
              <h2 className="sub_heading2 mb-3">Stainless Steel Railings</h2>
              <p className="para mb-4">
                Stainless Steel railings are known for their strength,
                durability, and corrosion resistance, making them suitable for
                both indoor and outdoor use. They offer a sophisticated
                aesthetic and are available in various styles.
              </p>
              <div className="inline-block">
                <Link
                  href={
                    "/railings-manufactures-suppliers-india/stainless-steel-railing-system"
                  }
                  className="primary-button"
                >
                  Explore Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturesSection
        data={featuresData}
        description=" Explore our range of Aluminium and Stainless Steel Railings to find
          the perfect solution for your project. Contact us for more information
          or to request a quote."
      />
    </div>
  );
};

export default RailingsSection;
