import { iconAssets } from "@/public/assets/icons";
import {
  ContactInfoData,
  FooterDescription,
  NavigationTexts,
  SocialMediaIcons,
} from "@/types/footerContent.types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface FooterProps {
  footerData: {
    socialMediaIcons: SocialMediaIcons;
    navigationTextsHome: NavigationTexts;
    navigationTextsRailing: NavigationTexts;
    contactInfo: ContactInfoData;
    footerDescription: FooterDescription;
  };
}

const Footer: React.FC<FooterProps> = ({ footerData }) => {
  const {
    socialMediaIcons,
    navigationTextsHome,
    navigationTextsRailing,
    contactInfo,
    footerDescription,
  } = footerData;
  return (
    <footer>
      <div className="bg-[#FFF2ED] text-[#131313] section-y-padding section-x-padding mb-0">
        {/* sapration line  */}
        <hr className="hidden md:block lg:block w-[100%] m-auto border-t-2 border-primary-text mb-8" />

        {/* Main Container */}
        <div className="mx-auto grid lg:grid-cols-3 gap-4">
          {/* section I */}
          <div className="flex flex-col gap-4 ">
            <div>
              <Link href={`/`}>
                <Image
                  src={"/assets/navbar/nav-logo-2.png"}
                  alt="Logo"
                  width={190}
                  height={35}
                />
              </Link>
            </div>
            <div className="w-[92%] ">
              {/* <p className="text-sm font-Montserrat font-normal text-pretty text-secondary-500 "> */}
              <p className="text-sm font-Montserrat font-normal ">
                {footerDescription}
              </p>
            </div>
            <div className="flex flex-row gap-4">
              {socialMediaIcons.map((item, i) => (
                <Link key={i} href={item.url} target="_blank">
                  <Image src={item.src} width={30} height={30} alt={item.alt} />
                </Link>
              ))}
            </div>
          </div>

          {/* sepration line only applicable for md screen */}
          <div className="mx-auto w-full flex-grow border-t border-primary-text md:hidden"></div>

          {/* second II */}
          <div className="flex flex-row justify-between">
            {/* <ul className="flex flex-col justify-center space-y-2 font-Montserrat text-gray-500 font-light text-sm leading-5"> */}
            <ul className="space-y-2 text-sm font-Montserrat font-normal ">
              {navigationTextsHome.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.url}
                    className="text-sm font-Montserrat font-normal hover:text-primary-text "
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="space-y-2 text-sm font-Montserrat font-normal ">
              {navigationTextsRailing.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.url}
                    className="text-sm font-Montserrat font-normal text-[#131313] hover:text-primary-text"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* sepration line only applicable for md screen */}
          <div className="mx-auto w-full flex-grow border-t border-primary-text md:hidden"></div>

          {/* Section III */}
          <div className="flex flex-col gap-4 items-start lg:items-end">
            <div>
              <p className="text-primary-text font-medium font-RidleyGrotesk  text-2xl">
                Reach out to us
              </p>
            </div>
            <div className="flex flex-row gap-1 w-[70%] text-right">
              {/* <Image
                src={iconAssets.footerLocationIcon}
                className="w-4 h-5"
                alt="location"
              /> */}
              <div className="lg:text-end text-wrap w-full">
                {/* <p className="text-sm w-[265px] text-left leading-5 text-secondary-500 border border-red-600"> */}
                {/* <p className="text-sm leading-5 text-secondary-500"> */}{" "}
                <p className="text-sm font-Montserrat font-normal ">
                  <Image
                    src={iconAssets.footerLocationIcon}
                    className="w-4 h-5 inline"
                    alt="location"
                  />{" "}
                  {contactInfo.address1}
                </p>
                <p className="text-sm font-Montserrat font-normal ">
                  {contactInfo.address2}
                </p>
                <p className="text-sm font-Montserrat font-normal ">
                  {contactInfo.address3}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm leading-5 ">
                {/* Phone: <span>{contactInfo.phone1}</span> */}
                {/* <span>{contactInfo.phone2}</span> */}
                Phone: <Link href={`tel:+912267439190`}>+91-22-6743 9190</Link>
              </p>
              <p className="text-sm leading-5 ">
                {" "}
                <Link href={`tel:+912267437887`}>+91-22-6743 7887</Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-full bg-black h-[48px] flex justify-center items-center">
        
        <Link
          href="https://www.furation.tech/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="font-Montserrat text-xs font-normal text-white text-center">
            Made with ❤️ by{" "}
            <span className="underline underline-offset-4">Furation.Tech</span>{" "}
          </p>
        </Link>
      </div> */}
    </footer>
  );
};

export default Footer;
