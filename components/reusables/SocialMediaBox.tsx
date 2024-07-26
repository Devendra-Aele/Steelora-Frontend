// SocialMediaSection.tsx
import Image from "next/image";
import React from "react";

const SocialMediaSection: React.FC = () => {
  return (
    <div className="hidden fixed z-[50] right-0 top-1/2 transform -translate-y-1/2 sm:flex flex-col space-y-0 mt-[11.25rem]">
      <div className="relative">
        <a
          href="https://www.linkedin.com/company/steelora"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="p-2 bg-[#E9E9E9] w-[4.6875rem] h-[5rem] ">
            <div className="absolute top-3 inset-x-1.5 w-16 h-[3.25rem] flex justify-center items-center flex-col gap-1">
              <Image
                src={"/assets/icons/linkedin_logo.svg"}
                alt="Linkedin"
                width={1440}
                height={894}
                className="w-[30px] h-[30px]"
              />
              <p className="text-[#1D1D1D] font-medium text-xs leading-4 font-poppins">
                LinkedIn
              </p>
            </div>
          </div>
        </a>
      </div>
      <div className="relative">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="p-2 bg-[#E9E9E9] w-[4.6875rem] h-[5rem] ">
            <div className="absolute top-3 inset-x-1.5 w-16 h-[3.25rem] flex justify-center items-center flex-col gap-1">
              <Image
                src={"/assets/icons/instagram.svg"}
                alt="Whatsapp-img"
                width={1440}
                height={894}
                className="w-[30px] h-[30px]"
              />
              <p className="text-[#1D1D1D] font-medium text-xs leading-4 font-poppins">
                Instagram
              </p>
            </div>
          </div>
        </a>
      </div>
      <div className="relative">
        <a href="mailto:youremail@example.com" className="block">
          <div className="p-2 bg-primary-text w-[4.6875rem] h-[5rem] ">
            <div className="absolute top-3 inset-x-1.5 w-16 h-[3.25rem] flex justify-center items-center flex-col gap-1">
              <Image
                src={"/assets/icons/email.svg"}
                alt="Whatsapp-img"
                width={100}
                height={894}
                className="w-[30px] h-[30px]"
              />
              <p className="text-white font-medium text-xs leading-4 font-poppins">
                E-mail
              </p>
            </div>
          </div>
        </a>
      </div>
      <div className="relative">
        <a
          href="https://wa.me/whatsappnumber"
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="p-2 bg-[#E9E9E9] w-[4.6875rem] h-[5rem]">
            <div className="absolute top-3 inset-x-1.5 w-16 h-[3.25rem]  flex justify-center items-center flex-col gap-1">
              <Image
                src={"/assets/icons/whatsapp.svg"}
                alt="Whatsapp-img"
                width={1440}
                height={894}
                className="w-[30px] h-[30px]"
              />
              <p className="text-[#1D1D1D] font-medium text-xs leading-4 font-poppins">
                Whatsapp
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default SocialMediaSection;
