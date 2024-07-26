import React from "react";
import ContactForm from "./ContactForm";
import Image from "next/image";
import { iconAssets } from "@/public/assets/icons";
import Link from "next/link";
import OutlinedButton from "../reusables/OutlinedButton";

const ContactUsSection = () => {
  return (
    <section className="section-y-padding mt-16 lg:mt-24">
      <div className=" lg:py-0 lg:bg-transparent">
        <h1 className="section-heading">Contact Us</h1>
      </div>
      <div className="lg:mt-8 section-x-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 text-white lg:gap-14 xl:gap-20">
          {/* left div */}
          <div>
            <div className="py-6 border-b border-primary-text">
              <h2 className="font-RidleyGrotesk  text-light text-primary-text xl:text-2xl">
                For Business Enquiries
              </h2>
            </div>
            <ContactForm />
          </div>

          {/* right div */}
          <div>
            <div className="py-6 border-b border-primary-text">
              <span className=" font-RidleyGrotesk  text-light text-primary-text xl:text-2xl">
                Stay Connected
              </span>
            </div>

            <div className="mt-6 mb-10 lg:mb-14 flex flex-col justify-between items-start w-full gap-6">
              <div>
                <div className="flex gap-2 mb-2">
                  <Image
                    src={iconAssets.location}
                    height={24}
                    width={24}
                    alt="Location"
                  />
                  <span className="text-primary-text font-medium">
                    Head Office
                  </span>
                </div>
                <span className="font-Montserrat text-sm text-para-text">
                  Off No 7A & 8, Ground Floor, A To Z Estate, Next to Peninsula
                  Business Park, Lower Parel West, Mumbai 400013(INDIA).{" "}
                  <span className="text-primary-text font-medium underline">
                    <Link
                      target="_blank"
                      // href={`https://maps.app.goo.gl/mU7LUgLQoEKoD1nTA`}
                      href={`https://maps.app.goo.gl/Jn3NMEtW6VnRKccC8`}
                    >
                      Get Directions
                    </Link>
                  </span>
                </span>
              </div>

              <div>
                <div className="flex gap-2 mb-2">
                  <Image
                    src={iconAssets.phone}
                    height={24}
                    width={24}
                    alt="Location"
                  />
                  <span className="font-Montserrat text-primary-text font-medium">
                    Phone
                  </span>
                </div>
                <Link href={`tel:+912267439190`} className="">
                  <span className=" hover:text-primary-text font-Montserrat text-sm text-para-text">
                    +91-22-6743 9190
                  </span>
                </Link>
                <span className="text-black">{" , "}</span>
                <Link href={`tel:+912267437887`}>
                  <span className="hover:text-primary-text  font-Montserrat text-sm text-para-text">
                    +91-22-6743 7887
                  </span>
                </Link>
              </div>

              <div>
                <div className="flex gap-2 mb-2">
                  <Image
                    src={iconAssets.mail}
                    height={24}
                    width={24}
                    alt="mail"
                  />
                  <span className="font-Montserrat text-primary-text font-mediumt">
                    Email
                  </span>
                </div>
                <span className="font-Montserrat text-sm text-para-text">
                  <Link
                    className="hover:text-primary-text"
                    href={`mailto:info@steelora.com`}
                  >
                    info@steelora.com
                  </Link>
                </span>
              </div>
              <div className="h-[25vh] w-full mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d486.17616758582716!2d72.825528979317!3d18.998778221219148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce8d4770d38f%3A0x5214c40cb2670327!2sPeninsula%20Corporate%20Park!5e0!3m2!1sen!2sin!4v1715746909762!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full"
                ></iframe>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                form="contactForm"
                className="primary-button block lg:hidden"
              >
                Send
              </button>
              {/* <OutlinedButton>Download Brochure</OutlinedButton> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
