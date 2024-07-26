import React from "react";
import "./contactUs.css";

const MapSection = () => {
  return (
    <>
      {/* <div className="hidden lg:block map_section h-[60vh] w-full"></div>
      <div className="block lg:hidden map_section_mobile h-[60vh] w-full"></div> */}
      <div className="h-[55vh]">
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d670.6184477236569!2d72.82614465047229!3d18.955329977156822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf0130fb1f21%3A0x87dfeb19df944d79!2sSUNRISE%20HOUSE!5e0!3m2!1sen!2sin!4v1714629376849!5m2!1sen!2sin"
          // width="600"
          // height="450"
          // style="border:0;"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full w-full"
        ></iframe> */}

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
    </>
  );
};

export default MapSection;
